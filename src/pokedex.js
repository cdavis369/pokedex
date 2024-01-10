import Pokecard from "./pokecard.js"

const Pokedex = (props) => {
  const { pokemon } = props;
  return(
    <div className="pokedex-container">
      {pokemon.map((p) => (
        <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
      ))}
    </div>
  );
};

export default Pokedex;