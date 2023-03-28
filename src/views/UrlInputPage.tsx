import React, { useState } from 'react';
import './styles.css';

const UrlInputPage: React.FC = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Faça uma chamada API para enviar a URL para o back-end e obter os cookies
  };

  return (
    <div className="container">
      <h1 className="title">Insira a URL da página para escanear os cookies</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          className="form-control"
        />
        <button type="submit" className="btn">
          Escanear cookies
        </button>
      </form>
    </div>
  );
};

export default UrlInputPage;