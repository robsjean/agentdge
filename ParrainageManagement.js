import React, { useState } from 'react';
import CreateParrainageForm from './CreateParrainageForm';
import './ParrainageManagement.css'; // Import du fichier CSS

const ParrainageManagement = () => {
  const [parrainagePeriods, setParrainagePeriods] = useState([]);

  // Fonction pour ajouter une nouvelle période de parrainage
  const handleAddParrainagePeriod = (newPeriod) => {
    setParrainagePeriods([...parrainagePeriods, newPeriod]);
  };

  // Fonction pour supprimer une période de parrainage
  const handleDeleteParrainagePeriod = (index) => {
    const updatedPeriods = parrainagePeriods.filter((_, i) => i !== index);
    setParrainagePeriods(updatedPeriods);
  };

  return (
    <div className="parrainage-management-container">
      <h2>Gestion des périodes de parrainage</h2>
      <CreateParrainageForm onSubmit={handleAddParrainagePeriod} />

      {/* Affichage des périodes de parrainage existantes */}
      <div className="periods-list">
        {parrainagePeriods.map((period, index) => (
          <div key={index} className="period-item">
            <div className="period-details">
              <div className="period-name">
                Début : {period.startDate}, Fin : {period.endDate}
              </div>
              <button
                className="delete-period-button"
                onClick={() => handleDeleteParrainagePeriod(index)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParrainageManagement;
