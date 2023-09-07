export function HousesShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateHouse(props.house.id, params, () => event.target.reset())
  }

  const handleClick = () => {
    props.onDestroyHouse(props.house)
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
          <div>
            squarefeet: <input defaultValue={props.house.squarefeet} name="squarefeet" type="text" />
          </div>
          <div>
            bedrooms: <input defaultValue={props.house.bedrooms} name="bedrooms" type="text" />
          </div>
          <div>
            bathrooms: <input defaultValue={props.house.bedrooms} name="bathrooms" type="text" />
          </div>
          <div>
            adress: <input defaultValue={props.house.adress} name="adress" type="text" />
          </div>
          <button type="submit">Update house</button>
        </form>
        <button onClick={handleClick}>Destroy House</button>
    </div>
  );
}