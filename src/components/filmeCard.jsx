import React from 'react';
import './FilmeCard.css'; 

function FilmeCard({ titulo, genero, ano, assistido, onToggle }) {
  const cardClass = assistido ? 'card assistido' : 'card pendente';

  return (
    <div className={cardClass}>
      <h3>{titulo}</h3>
      <p><strong>Gênero:</strong> {genero}</p>
      <p><strong>Ano:</strong> {ano}</p>
      <button onClick={onToggle}>
        {assistido ? 'Ainda não assisti' : 'Já assisti'}
      </button>
    </div>
  );
}

export default FilmeCard;