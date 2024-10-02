import pokedex from '../../data/Pokemon-data.json';
import style from './displaylist.module.css';
import Filter from '../filter/filter.jsx';
import { useState } from 'react';
// import './displaylist-type.css';

function DisplayList() {
  const [filtered, setFiltered] = useState(pokedex);

  return (
    <>
      <Filter setFilter={setFiltered} />
      {filtered.map((pokemon) => (
        <>
          <div className={style.pokemon} key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} />
            <p className={style[pokemon.types[0]]}>{pokemon.types[0]}</p>
            {pokemon.types[1] && (
              <p className={style[pokemon.types[1]]}>{pokemon.types[1]}</p>
            )}
            <div>
              <p>hp : {pokemon.stats.hp}</p>
              <p>attack : {pokemon.stats.attack}</p>
              <p>defense : {pokemon.stats.defense}</p>
              <p>special-attack : {pokemon.stats['special-attack']}</p>
              <p>special-defense : {pokemon.stats['special-defense']}</p>
              <p>speed : {pokemon.stats.speed}</p>
            </div>
            <p>{pokemon.description}</p>
          </div>
        </>
      ))}
    </>
  );
}

export default DisplayList;
