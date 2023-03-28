import React, { useState, useEffect } from 'react';
import './styles.css';

const ManageCookiesPage: React.FC = () => {
  const [cookies, setCookies] = useState<string[]>([]);

  useEffect(() => {
    // Faça uma chamada API para obter a lista de cookies armazenados e definir o estado dos cookies
  }, []);

  const handleSave = async () => {
    // Faça uma chamada API para salvar as alterações nos cookies
  };

  return (
    <div className="container">
      <h1 className="title">Gerenciar cookies</h1>
      <ul className="list">
        {cookies.map((cookie, index) => (
          <li key={index} className="list-item">
            {cookie}
          </li>
        ))}
      </ul>
      <button onClick={handleSave} className="btn">
        Salvar alterações
      </button>
    </div>
  );
};

export default ManageCookiesPage;