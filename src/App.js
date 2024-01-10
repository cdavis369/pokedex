import './App.css';
import Pokedex from "./pokedex.js";
import pokemon from "./pokemon.js";
function App() {
  return (
    <div className="pokedex">
      <Pokedex pokemon={pokemon}/>
    </div>
  );
}

export default App;
