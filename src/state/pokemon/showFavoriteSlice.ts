import { createSlice } from "@reduxjs/toolkit";

type showFavoriteOnly = boolean;

const initialState: showFavoriteOnly = false;

const PokemonSlice = createSlice({
  name: "showFavorite",
  initialState,
  reducers: {
    showFavorite: (state) => {
      return !state;
    },
  },
});

export const { showFavorite } = PokemonSlice.actions;
export default PokemonSlice.reducer;
