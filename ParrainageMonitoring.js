import React, { useEffect, useState } from 'react';

const ParrainageMonitoring = () => {
  const [parrainages, setParrainages] = useState([]);

  // Simuler des parrainages enregistrés
  useEffect(() => {
    const interval = setInterval(() => {
      const randomParrainages = [
        { candidate: 'Candidate 1', count: Math.floor(Math.random() * 100) },
        { candidate: 'Candidate 2', count: Math.floor(Math.random() * 100) },
        { candidate: 'Candidate 3', count: Math.floor(Math.random() * 100) }
      ];
      setParrainages(randomParrainages);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Surveillance de l'évolution des parrainages</h2>
      <div>
        {parrainages.map((parrainage, index) => (
          <div key={index}>
            <p>{parrainage.candidate}: {parrainage.count} parrainages</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParrainageMonitoring;
