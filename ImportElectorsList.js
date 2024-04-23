import React, { useState } from 'react';
import './ImportElectorsList.css'; // Import du fichier CSS

const ImportElectorsList = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [generatedHash, setGeneratedHash] = useState('');
  const [inputHash, setInputHash] = useState('');
  const [hashMatch, setHashMatch] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileFormat, setFileFormat] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file.name);
    const format = file.name.split('.').pop().toUpperCase();
    setFileFormat(format);
  };

  const handleImport = async () => {
    if (selectedFile) {
      const hash = await empreinteFichier(selectedFile);
      setGeneratedHash(hash);
      console.log('Empreinte SHA256 du fichier:', hash);
    } else {
      console.log('Aucun fichier sélectionné');
    }
  };

  const handleInputHashChange = (event) => {
    setInputHash(event.target.value);
  };

  const handleSubmit = () => {
    if (inputHash === generatedHash) {
      setHashMatch(true);
      console.log('Les empreintes correspondent.');
      // Ajoutez ici la logique pour permettre à l'utilisateur de télécharger le fichier
    } else {
      setHashMatch(false);
      console.log('Les empreintes ne correspondent pas.');
    }
  };

  // Fonction pour calculer l'empreinte SHA256 d'un fichier
  async function empreinteFichier(fichier) {
    const arrayBuffer = await fichier.arrayBuffer();

    const empreinteArrayBuffer = await crypto.subtle.digest(
      "SHA-256",
      arrayBuffer,
    );

    const uint8VueEmpreinte = new Uint8Array(empreinteArrayBuffer);
    const empreinteTexte = Array.from(uint8VueEmpreinte)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return empreinteTexte;
  }

  return (
    <div className="import-electors-container">
      <h2>Importation de la liste des électeurs</h2>
      <div className="upload-section">
        <label className="upload-button">
          <input type="file" onChange={handleFileChange} />
          Sélectionner un fichier CSV
        </label>
        {fileName && <p>Nom du fichier : {fileName}</p>}
        {fileFormat && <p>Format du fichier : {fileFormat}</p>}
      </div>
      <button className="import-button" onClick={handleImport}>Importer</button>
      <div className="input-hash-container">
        <label>Saisir le hash :</label>
        <input type="text" value={inputHash} onChange={handleInputHashChange} />
        <button onClick={handleSubmit}>Vérifier</button>
      </div>
      {hashMatch && <p className="hash-match-message">Le hash saisi correspond au hash généré.</p>}
      {!hashMatch && inputHash !== '' && <p className="hash-match-message">Le hash saisi ne correspond pas au hash généré.</p>}
      <p className="upload-instructions">Cliquez pour sélectionner un fichier CSV contenant la liste des électeurs</p>
    </div>
  );
};

export default ImportElectorsList;