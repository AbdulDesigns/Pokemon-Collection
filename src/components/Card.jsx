const Card = ({ pokemon }) => {
  return (
    <div className="max-w-sm mx-auto py-6 px-4 bg-white rounded-2xl shadow-lg shadow-amber-700/10 border-1 border-amber-200 overflow-hidden flex justify-center flex-col">
      <img
        className="w-full h-40 object-contain object-center "
        src={pokemon.sprites.front_default}
        alt="Card Image"
      />

      <div className="p-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 capitalize">
          {pokemon.name}
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Discover the beauty of the outdoors with our hand-picked destinations
          for your next adventure.
        </p>
        <button className="bg-amber-500 cursor-pointer w-full border-amber-200 border-1 rounded-2xl  text-amber-100 px-4 py-3  hover:bg-amber-500 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
