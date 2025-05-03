import { useEffect, useState } from "react";
import Card from "./Card";

const Container = () => {
  // This component serves as a container for the Card component
  // and is responsible for fetching data from the PokeAPI.
  const [pokemonData, setPokemonData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const data = await response.json();
      console.log(data.results);
      // console.log(data.results[0].url);

      //now we need to get data from the url using async await in the map function
      const detailedData = data.results.map(async (cur) => {
        const res = await fetch(cur.url);
        const resData = await res.json();
        console.log(resData);
        return resData;
      });
      console.log(detailedData);

      //you need to use Promise.all to get the data from the array of promises
      const allData = await Promise.all(detailedData);
      console.log(allData);
      setPokemonData(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //getting data from the API
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-amber-950">
      <h1 className="text-7xl capitalize font-bold text-center py-15 text-amber-300">
        Pokemon Hunt
      </h1>
      <form
        action="./"
        className=" w-1/2 mx-auto mb-12 flex justify-center align-middle gap-8"
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Pokémon..."
          className="py-2 text-amber-50 w-1/2 px-4 border border-amber-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition duration-300"
        />
        <button
          type="submit"
          className="bg-amber-500 cursor-pointer border-amber-500 border rounded-2xl  text-amber-100 px-8 text-lg font-semibold hover:bg-amber-700 hover:text-white py-3 shadow-amber-500/10 shadow-lg hover:shadow-amber-500/30 transition duration-300"
        >
          Search
        </button>
      </form>
      <ul className="grid w-full mx-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  p-8 ">
        {pokemonData.map((pokemon) => (
          <li
            key={pokemon.id}
            className="hover:scale-105  hover:z-10 hover:shadow-amber-500/30 hover:shadow-lg  transition duration-300"
          >
            <Card pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Container;
