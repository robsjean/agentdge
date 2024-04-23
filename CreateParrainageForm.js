import React, { useState } from 'react';

const CreateParrainageForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation des données ici si nécessaire

    // Envoi des données au parent pour traitement
    onSubmit({ startDate, endDate });

    // Réinitialisation des champs après la soumission
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="startDate">Date de début :</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />

      <label htmlFor="endDate">Date de fin :</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />

      <button type="submit">Créer période de parrainage</button>
    </form>
  );
};

export default CreateParrainageForm;
