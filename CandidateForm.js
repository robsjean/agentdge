import React, { useState } from 'react';
import './CandidateForm.css'; 

const CandidateForm = () => {
  const [candidateInfo, setCandidateInfo] = useState({
    name: '',
    candidateNumber: '',
    party: '',
    partyColor1: '#ff0000', // Couleur par défaut pour le parti 1
    partyColor2: '#00ff00', // Couleur par défaut pour le parti 2
    partyColor3: '#0000ff', // Couleur par défaut pour le parti 3
    // Ajoutez d'autres champs d'information ici si nécessaire
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidateInfo({ ...candidateInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les informations du candidat à votre backend ou traiter les données localement
    console.log(candidateInfo);
  };

  return (
    <div className="candidate-form-container">
      <h2>Saisie des informations du candidat</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom du candidat:</label>
          <input
            type="text"
            name="name"
            value={candidateInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Numéro du candidat:</label>
          <input
            type="text"
            name="candidateNumber"
            value={candidateInfo.candidateNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Parti politique:</label>
          <input
            type="text"
            name="party"
            value={candidateInfo.party}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Couleur du parti politique 1:</label>
          <input
            type="color"
            name="partyColor1"
            value={candidateInfo.partyColor1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Couleur du parti politique 2:</label>
          <input
            type="color"
            name="partyColor2"
            value={candidateInfo.partyColor2}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Couleur du parti politique 3:</label>
          <input
            type="color"
            name="partyColor3"
            value={candidateInfo.partyColor3}
            onChange={handleChange}
            required
          />
        </div>
        {/* Ajoutez d'autres champs d'information si nécessaire */}
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
};

export default CandidateForm;
