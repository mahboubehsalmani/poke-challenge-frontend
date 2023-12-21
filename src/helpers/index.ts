const BASE_URL = "https://pokeapi.co/api/v2/";

export async function get_pokemon_names(limit: number): Promise<string[]> {
  // TODO
  // tip: try using query params on the /pokemon endpoint
  const url_endpoint = `${BASE_URL + "pokemon?limit="}${limit}`;
  let pokemon_names: string[] = [];
  const response = await fetch(url_endpoint);
  const data = await response.json();
  pokemon_names = data.results.map((pokemon: any) => pokemon.name);

  return pokemon_names;
}

export async function get_pokemon_image_url(
  pokemon_name: string
): Promise<string> {
  // TODO
  // tip: use the /pokemon/{name} endpoint
  const url_endpoint = `${BASE_URL + "pokemon/"}${pokemon_name}`;
  const response = await fetch(url_endpoint);
  const data = await response.json();
  const image_url = data.sprites.other["official-artwork"].front_default;
  return image_url;
}
