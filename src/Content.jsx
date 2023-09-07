import { HousesIndex } from "./HousesIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  
  const [houses, setHouses] = useState([]);

  const handleHousesIndex = () => {
    axios.get("http://localhost:3000/houses.json").then((response) => {
      console.log(response.data);
      setHouses(response.data);
    })
  }

  useEffect(handleHousesIndex, [])


  return (
    <div>
      <h1>Welcome to React!</h1>
      <HousesIndex houses={houses}  />
    </div>
  )
}