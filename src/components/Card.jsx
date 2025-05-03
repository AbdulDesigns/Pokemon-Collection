const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://source.unsplash.com/400x300/?nature,water"
        alt="Card Image"
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          Explore Nature
        </h2>
        <p className="text-gray-600 mb-4">
          Discover the beauty of the outdoors with our hand-picked destinations
          for your next adventure.
        </p>
        <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
