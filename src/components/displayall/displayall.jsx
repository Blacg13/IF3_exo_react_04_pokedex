import { useState } from 'react';
import pokedex from '../../data/Pokemon-data.json';

function DisplayList() {
  //todo 1) création d'un tableau, à partir d'un set de valeurs uniques issu d'un flatmapping de tous les types :
  const typesArray = [...new Set(pokedex.flatMap((pokemon) => pokemon.types))];
  //^ 1A) filtrer par (type = e.target.value)

  //todo 2)
  return () => {
    <ul>
      //todo 2) display All
      <li>
        {' '}
        <button
          value={'all'}
          //   key={'all'} pas besoin
          className={style.all}
          onClick={setFiltered([pokedex])}
        ></button>
      </li>
      //todo 1) return du tableau sous forme d'une liste de boutons
      <li>
        {typesArray.map((type) => (
          <button
            value={type}
            key={type}
            className={style.type}
            //^ 1A) return du filtrage par (type = e.target.value)
            onClick={filterByType}
          ></button>
        ))}
      </li>
    </ul>;
  };
}
export default DisplayList;
