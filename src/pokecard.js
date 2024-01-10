const Pokecard = (props) => {
  const { id, name, type, base_experience } = props;
  const imgsrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return(
    <div>
      <h4 className="name">{name}</h4>
      <img className="image" src={imgsrc}></img>
      <p className="type">Type: {type}</p>
      <p className="experience">XP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;