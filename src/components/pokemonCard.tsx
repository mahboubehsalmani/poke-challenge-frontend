import { toggleFavorite } from "../state/pokemon/pokemonSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";

type PokemonType = {
  name: string;
  image_url: string;
  favorite: boolean;
};

type PokemonCardPropType = {
  pokemon: PokemonType;
  dispatch: any;
};

const PokemonCard = ({
  pokemon: { name, image_url, favorite },
  dispatch,
}: PokemonCardPropType) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200, height: 200, padding: 2 }}
          image={image_url}
          alt={name}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <IconButton
            color={"error"}
            aria-label="Favorite"
            onClick={() =>
              dispatch(toggleFavorite({ name, image_url, favorite }))
            }
          >
            {favorite ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
