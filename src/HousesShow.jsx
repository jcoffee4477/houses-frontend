export function HousesShow(props) {
  return (
    <div>
      <h1>House information</h1>
      <p>squarefeet: {props.house.squarefeet}</p>
      <p>bedrooms: {props.house.bedrooms}</p>
      <p>bathrooms: {props.house.bathrooms}</p>
      <p>address: {props.house.address}</p>
    </div>
  );
}