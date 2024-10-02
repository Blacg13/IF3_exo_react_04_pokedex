import { useState } from 'react';
import pokedex from '../../data/Pokemon-data.json';
import style from './filter.module.css';
import DisplayList from '../displaylist/displaylist';

function Filter({ setFilter }) {
  // const typesSet0 = new Set(pokedex.map((pokemon) => pokemon.types[0]));
  // const typesSet01 = new Set(pokedex.map((pokemon) => pokemon.types[(0, 1)]));
  // const typesSetFinal = typesSet.add('flying');
  // console.log('typesSetFinal : ', typesSetFinal);
  const typesSet = new Set(pokedex.flatMap((pokemon) => pokemon.types));
  // console.log('typesSet(with .flatmap) : ', typesSet);
  const typesArray = Array.from(typesSet);
  // console.log('typesArray : ', typesArray);

  const [type, setType] = useState([pokedex]);
  // const testFilter = pokedex.filter((pokemon) =>
  //   pokemon.types.some((pkmnType) => {
  //     pkmnType === type;
  //     // console.log('pokemon type :' + pkmnType);
  //   })
  // );
  // console.log('testFilter :' + testFilter);
  const filterByType = (e) => {
    console.log('e.value :' + e.target.value);
    const filteredByTargetValue = pokedex.filter((pokemon) =>
      pokemon.types.includes(e.target.value)
    );
    console.log('filteredByTargetValue :' + filteredByTargetValue);
    setFilter(filteredByTargetValue);
    // console.log('prevType (e.target.value) : ' + type);
  };

  return (
    <div>
      {typesArray.map((type) => (
        <button
          value={type}
          key={type}
          className={style[type]}
          onClick={filterByType}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default Filter;
