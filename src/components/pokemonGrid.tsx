import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { addPokemon } from "../state/pokemon/pokemonSlice";
import { get_pokemon_image_url, get_pokemon_names } from "../helpers";
import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import PokemonCard from "./pokemonCard";
import { showFavorite } from "../state/pokemon/showFavoriteSlice";

function PokemonGrid() {
  const reduxPokemon = useSelector((state: RootState) => state.pokemon);
  const showFavoriteOnly = useSelector(
    (state: RootState) => state.showFavorite
  );
  const dispatch = useDispatch();

  useEffect(() => {
    get_pokemons();
  }, []);

  const get_pokemons = () => {
    get_pokemon_names(25).then((pokemonNames) => {
      const promises = pokemonNames.map((pokemon) =>
        get_pokemon_image_url(pokemon).then((image_url) => {
          return { name: pokemon, image_url, favorite: false };
        })
      );

      Promise.all(promises).then((newPokemons) => {
        dispatch(addPokemon(newPokemons));
      });
    });
  };

  return (
    <Box sx={{ margin: 10, marginTop: 4 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={showFavoriteOnly}
              onChange={() => dispatch(showFavorite())}
            />
          }
          label="Favourites only"
        />
      </FormGroup>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {reduxPokemon.map((pokemon) => {
          if (!showFavoriteOnly || (showFavoriteOnly && pokemon.favorite)) {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.name}
                dispatch={dispatch}
              />
            );
          }
          return null;
        })}

        {showFavoriteOnly &&
          !reduxPokemon.some((pokemon) => pokemon.favorite) && (
            <Grid item xs={12}>
              <Card
                sx={{
                  display: "flex",
                  width: "100%",
                  padding: 4,
                }}
              >
                <Typography component="div" variant="h6" color="#3B4CCA">
                  No favourite pokemon found. Please select some.
                </Typography>
              </Card>
            </Grid>
          )}
      </Grid>
    </Box>
  );
}

export default PokemonGrid;
