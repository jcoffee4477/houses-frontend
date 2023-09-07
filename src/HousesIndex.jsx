export function HousesIndex(props) {
  return (
    <div>
      <div id="houses-index">
      <h1>All houses</h1>
     {props.houses.map((house) => (
         <div key={house.id}>
           <h2>{house.squarefeet}</h2>
           <p>bedrooms: {house.bedrooms}</p>
           <p>bathrooms: {house.bathrooms}</p>
            <p>address: {house.address}</p>
            <button onClick={() => props.onHousesShow(house)}>More info</button>
         </div>
       ))}
       </div>
    </div>
  );
}