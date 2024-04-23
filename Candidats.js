import React, { useState } from 'react';
import Candidat from './../assets/candidat.jpg';
import InfosCandidats from '@/data/Data';
import Exit from './../assets/exit-svgrepo-com.png';

function Candidats({ setVerificationReussie, setConnexion }) {
  const [selectedCandidate, setSelectedCandidate] = useState(null); // État pour stocker les informations sur le candidat sélectionné
  const [editingCandidate, setEditingCandidate] = useState(null); // État pour stocker les informations du candidat en cours de modification

  const handleEditCandidate = (candidat) => {
    setSelectedCandidate(candidat); // Stocker les informations sur le candidat sélectionné
    setEditingCandidate({ ...candidat }); // Préremplir le formulaire avec les informations du candidat sélectionné
  };

  const handleCancelEdit = () => {
    setEditingCandidate(null); // Annuler la modification du candidat
  };

  const handleSaveEdit = () => {
    // Enregistrer les modifications du candidat
    // Vous pouvez implémenter cette fonction pour enregistrer les modifications sur le backend ou localement
    console.log("Informations du candidat modifiées :", editingCandidate);
    setEditingCandidate(null); // Terminer l'édition
  };

  return (
    <div>
      <div className='flex justify-end mt-4 pr-16'>
        <button
          onClick={() => {
            setVerificationReussie(false);
            setConnexion('');
          }}
          className='inline-flex justify-center items-center bg-red-500 p-2 rounded-xl text-white hover:bg-red-700'>
          Se déconnecter
          <img src={Exit} alt='' className='pl-2 h-4' />
        </button>
      </div>
      <div className='flex flex-col justify-center items-center mb-5'>
        <img src={Candidat} className='h-24' alt='Candidat' />
        <h1 className='font-bold text-2xl'>Les candidats</h1>
      </div>
      <div className='grid grid-cols-3 gap-8 justify-center'>
        {InfosCandidats.map((candidat, index) => (
          <div key={index} className='max-w-xs bg-white m-2 border h-96 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <a href={candidat.urlInfos}>
              <img className='rounded-t-lg w-full h-1/3' src={candidat.photo} alt={`${candidat.nom} ${candidat.prenoms}`} />
            </a>
            <div className='p-5'>
              <a href={candidat.urlInfos}>
                <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-500 dark:text-white'>
                  {candidat.prenoms} {candidat.nom}
                </h5>
              </a>
              <p className='mb-3 font-normal text-sm text-gray-700 dark:text-gray-400'>
                <span className='font-bold'>Parti politique : </span> {candidat.partiePolitique}
              </p>
              <p className='mb-3 font-normal text-sm text-gray-700 dark:text-gray-400'>
                <span className='font-bold'>Slogan : </span> {candidat.slogan}
              </p>
              <p className='mb-3 font-bold text-sm text-gray-700 dark:text-gray-400'>Couleurs du parti :</p>
              <div className='flex space-x-2'>
                {candidat.couleurParti.map((color, index) => (
                  <div key={index} className='w-6 h-6 rounded-full border border-gray-200' style={{ backgroundColor: color }} title={`Couleur ${index + 1}`} />
                ))}
              </div>
              {editingCandidate && editingCandidate.nom === candidat.nom && editingCandidate.prenoms === candidat.prenoms ? (
                // Afficher le formulaire de modification prérempli
                <div className="flex justify-between mt-4">
                  <button onClick={handleCancelEdit} className="bg-gray-500 p-2 rounded-lg text-white hover:bg-gray-700">Annuler</button>
                  <button onClick={handleSaveEdit} className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-700">Enregistrer</button>
                </div>
              ) : (
                // Afficher le bouton Modifier
                <button onClick={() => handleEditCandidate(candidat)} className="bg-blue-500 p-2 mt-4 rounded-lg text-white hover:bg-blue-700">
                  Modifier
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Candidats;
