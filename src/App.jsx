/**
 * Réaliser une application qui permet d'afficher la liste des Pokémons.
 * L'utilisateur peut filtrer les Pokémons par leur type via des boutons.
 * Les informations Pokémons sont : Nom, Description, Type, Stats, image (optionnel)
 *
 * Il faudra préparer un fichier JSON avec les données à utiliser (via un AI).
 * Pour les images utiliser celle du GitHub de la pokeapi : https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon
 */

import './App.css';
import DisplayList from './components/displaylist/displaylist.jsx';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Liste des pokémons</h1>
      <DisplayList />
    </>
  );
}

export default App;
