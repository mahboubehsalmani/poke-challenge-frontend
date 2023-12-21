import { createSlice } from "@reduxjs/toolkit";

type Pokemon = {
  name: string;
  image_url: string;
  favorite: boolean;
};

type Pokemons = Pokemon[];

type PayloadAction<T> = {
  payload: T;
};

const initialState: Pokemons = [];

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<Pokemons>) => {
      state.splice(0, state.length);
      state.push(...action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<Pokemon>) => {
      const pokemon = state.find(
        (pokemon) => pokemon.name === action.payload.name
      );
      if (pokemon) {
        pokemon.favorite = !pokemon.favorite;
      }
    },
  },
});

export const { toggleFavorite, addPokemon } = PokemonSlice.actions;
export default PokemonSlice.reducer;
