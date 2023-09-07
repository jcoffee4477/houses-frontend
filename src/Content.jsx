import { HousesIndex } from "./HousesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { HousesNew } from "./HousesNew"
import { Modal } from "./Modal"
import { HousesShow } from "./HousesShow"

export function Content() {
  
  const [houses, setHouses] = useState([]);
  const [isHousesShowVisible, setIsHousesShowVisible] = useState(false);
  const [currentHouse,  setCurrentHouse] = useState({})

  const handleHousesIndex = () => {
    axios.get("http://localhost:3000/houses.json").then((response) => {
      console.log(response.data);
      setHouses(response.data);
    })
  }

  const handleCreateHouse = (params, successCallback) => {
        console.log("handleCreateHouse", params);
        axios.post("http://localhost:3000/houses.json", params).then((response) => {
          setHouses([...houses, response.data]);
         successCallback();
        });
      };

      const handleHousesShow = (house) => {
        setIsHousesShowVisible(true)
        setCurrentHouse(house)
      }

      const handleClose = () => {
        setIsHousesShowVisible(false)
      }

  useEffect(handleHousesIndex, [])


  return (
    <div>
      <h1>Welcome to React!</h1>
      <HousesIndex houses={houses} onHousesShow={handleHousesShow} />
      <HousesNew onCreateHouse={handleCreateHouse} />
      <Modal show={isHousesShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <HousesShow house={currentHouse} />
      </Modal>
    </div>
  )
}