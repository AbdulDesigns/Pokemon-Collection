import { useEffect } from "react";
import Card from "./Card";

const Container = () => {
  // This component serves as a container for the Card component
  const fetchData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();
    console.log(data.results);
    // console.log(data.results[0].url);
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
