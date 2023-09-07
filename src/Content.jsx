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

      const handleUpdateHouse = (id, params, successCallback) => {
            console.log("handleUpdateHouse", params);
           axios.patch(`http://localhost:3000/houses/${id}.json`, params).then((response) => {
             setHouses(
               houses.map((house) => {
                 if (house.id === response.data.id) {
                   return response.data;
                   } else {
                     return house;
                   }
                 })
               );
               successCallback();
               handleClose();
             });
           };

           const handleDestroyHouse = (house) => {
                 console.log("handleDestroyHouse", house);
                 axios.delete(`http://localhost:3000/houses/${house.id}.json`).then((response) => {
                   setHouses(houses.filter((h) => h.id !== house.id));
                   handleClose();
                 });
              };
          

  useEffect(handleHousesIndex, [])


  return (
    <div>
      <h1>Welcome to React!</h1>
      <HousesIndex houses={houses} onHousesShow={handleHousesShow} />
      <HousesNew onCreateHouse={handleCreateHouse} />
      <Modal show={isHousesShowVisible} onClose={handleClose}>
        <h1>Test</h1>
        <HousesShow house={currentHouse} onUpdateHouse={handleUpdateHouse} onDestroyHouse={handleDestroyHouse} />
      </Modal>
    </div>
  )
}