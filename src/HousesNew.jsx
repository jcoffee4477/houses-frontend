export function HousesNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateHouse(params, () => event.target.reset())
  };

  return (
    <div>
      <h1>New house</h1>
      <form onSubmit={handleSubmit}>
        <div>
          squarefeet: <input name="squarefeet" type="text" />
        </div>
        <div>
          bedrooms: <input name="bedrooms" type="text" />
        </div>
        <div>
          bathrooms: <input name="bathrooms" type="text" />
        </div>
        <div>
          address: <input name="address" type="text" />
        </div>
        <button type="submit">Create house</button>
      </form>
    </div>
  );
}