import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon/pokemonSlice";
import showFavoriteReducer from "./pokemon/showFavoriteSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    showFavorite: showFavoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
