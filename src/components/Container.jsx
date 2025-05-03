import { useEffect } from "react";
import Card from "./Card";

const Container = () => {
  // This component serves as a container for the Card component
  // and is responsible for fetching data from the PokeAPI.
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //getting data from the API
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-15">Pokemon Hunt</h1>
      <Card />
    </>
  );
};

export default Container;
