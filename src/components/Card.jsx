const Card = ({ pokemon }) => {
  return (
    <div className="max-w-auto mx-auto py-6 px-4  h-auto bg-white rounded-2xl shadow-sm shadow-amber-700/10 border-1 border-amber-200 overflow-hidden flex justify-center flex-col">
      <img
        className="w-full h-36 p-2 overflow-hidden object-contain object-center "
        src={pokemon.sprites.other.dream_world.front_default}
        alt="Card Image"
      />
      <div className="bg-amber-100 text-amber-500 py-2 px-6 w-auto mx-auto flex justify-between mt-5 items-center rounded-3xl">
        <p className="text-sm capitalize">
          {/* {pokemon.types[0].type.name}
        {pokemon.types[1] ? `, ${pokemon.types[1].type.name}` : ""} */}
          {/* professional method */}
          {pokemon.types.map((cur) => cur.type.name).join(", ")}
        </p>
      </div>
      <div className="p-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 capitalize">
          {pokemon.name}
        </h2>

        {/* abilities */}
        <div className="flex overflow-hidden py-4 gap-4 flex-wrap justify-between items-center w-full mb-4">
          <p className="text-sm ">
            <span className="font-bold">Height: </span>
            {pokemon.height}
          </p>
          <p className="text-sm ">
            <span className="font-bold">Weight: </span>
            {pokemon.weight}
          </p>
          <p className="text-sm ">
            <span className="font-bold">Abilities: </span>
            {pokemon.abilities
              .map((cur) => cur.ability.name)
              .splice(0, 1)
              .join(", ")}
          </p>
          <p className="text-sm ">
            <span className="font-bold">Speed: </span>
            {pokemon.stats.map((cur) => {
              if (cur.stat.name === "speed") {
                return cur.base_stat;
              }
              return null;
            })}
          </p>
        </div>

        <button className="bg-amber-500 cursor-pointer w-full border-amber-200 border-1 rounded-2xl  text-amber-100 px-4 py-3  hover:bg-amber-500 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
