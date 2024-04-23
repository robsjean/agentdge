// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!email.trim()) {
      errors.email = "L'adresse email est requise.";
    }
    if (!password.trim()) {
      errors.password = 'Le mot de passe est requis.';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      navigate('/'); // Redirection vers la page d'accueil
    }
  };

  return (
    <div className="login-container">
      <h2>Veuillez vous connecter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Adresse email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="submit-button">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
