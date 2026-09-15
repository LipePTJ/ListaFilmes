import React, { useState } from 'react';
import FilmeCard from './components/FilmeCard'; 

export default function App() {

  const [filmes, setFilmes] = useState([
    { id: 1, titulo: 'O Senhor dos Anéis', genero: 'aventura', ano: 2001, assistido: true },
    { id: 2, titulo: 'Matrix', genero: 'ficção', ano: 1999, assistido: false },
    { id: 3, titulo: 'Orgulho e Preconceito', genero: 'romance', ano: 2005, assistido: true },
    { id: 4, titulo: 'John Wick', genero: 'ação', ano: 2014, assistido: false },
  ]);

  const alternarStatus = (id) => {
    const novaLista = filmes.map((filme) => {
      if (filme.id === id) {
        return { ...filme, assistido: !filme.assistido };
      }
      return filme;
    });
    setFilmes(novaLista);
  };

  const totalFilmes = filmes.length;
  const totalAssistidos = filmes.filter(filme => filme.assistido).length;
  const totalPendentes = totalFilmes - totalAssistidos;

  return (
    <div className="app-container">
      <h1>Minha Lista de Filmes</h1>
      
      <div className="contadores">
        <p>🎬 Total de Filmes: <strong>{totalFilmes}</strong></p>
        <p>✅ Assistidos: <strong>{totalAssistidos}</strong></p>
        <p>⏳ Pendentes: <strong>{totalPendentes}</strong></p>
      </div>

      <div className="lista-filmes">
        {filmes.map((filme) => (
          <FilmeCard
            key={filme.id}
            titulo={filme.titulo}
            genero={filme.genero}
            ano={filme.ano}
            assistido={filme.assistido}
            onToggle={() => alternarStatus(filme.id)}
          />
        ))}
      </div>
    </div>
  );
}

