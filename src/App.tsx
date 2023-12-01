/* eslint-disable @typescript-eslint/no-unused-vars */

function PokemonCard() {
  return <div></div>;
}

function PokemonGrid() {
  // 1. get the 25 first pokemon names&image_urls on mount
  // 2. render the PokemonCards
  // 3. add a checkbox to toggle favourites only
  // 4. display only favourites if the "Favourites only" checkbox is checked

  return (
    <div>
      <input type="checkbox" />
      Favourites only
      <br />
      <div>{/* PokemonCards go here */}</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PokemonGrid />
    </div>
  );
}

export default App;
