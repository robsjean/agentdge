// WelcomePage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigateToPage = (page) => {
    navigate(`/${page}`);
    setMenuOpen(false); // Fermer le menu après la navigation
  };

  const handleLogout = () => {
    // Mettez ici le code pour gérer la déconnexion de l'utilisateur
    navigate('/login');
  };

  return (
    <div className="container">
      {/* Barre latérale */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <ul>
            <li onClick={() => handleNavigateToPage('parrainage')}>Gestion des périodes de parrainage</li>
            <li onClick={() => handleNavigateToPage('import-electors')}>Importation de la liste des électeurs</li>
            <li onClick={() => handleNavigateToPage('candidate-form')}>Saisie des informations des candidats</li>
            <li onClick={() => handleNavigateToPage('parrainage-monitoring')}>Surveillance des parrainages</li>
          </ul>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      </div>

      {/* Icône de menu */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      {/* Contenu */}
      <div className={`content ${menuOpen ? 'content-menu-open' : 'content-menu-closed'}`}>
        <div className="welcome-page-container">
          <div className="appbar">
            {/* Titre de l'application */}
            <div className="app-title">Bienvenue sur la plateforme des Agents DGE</div>
          </div>
          
          {/* Contenu principal */}
          <div className="functionality-boxes">
            <div className="functionality-box" onClick={() => handleNavigateToPage('parrainage')}>
              <h2>Gestion des périodes de parrainage</h2>
              <p>Créer, activer, désactiver et modifier les périodes de parrainage</p>
            </div>
            <div className="functionality-box" onClick={() => handleNavigateToPage('import-electors')}>
              <h2>Importation de la liste des électeurs</h2>
              <p>Importer des fichiers de liste d'électeurs dans différents formats</p>
            </div>
            <div className="functionality-box" onClick={() => handleNavigateToPage('candidate-form')}>
              <h2>Saisie des informations des candidats</h2>
              <p>Saisir les informations des candidats via des formulaires</p>
            </div>
            <div className="functionality-box" onClick={() => handleNavigateToPage('parrainage-monitoring')}>
              <h2>Surveillance de l'évolution des parrainages</h2>
              <p>Afficher en temps réel les parrainages enregistrés</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;