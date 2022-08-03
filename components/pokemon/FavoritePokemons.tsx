import { Card, Grid, Image } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface FavoritesPokemonsProps {
  pokemons: number[];
}

export const FavoritePokemons: FC<FavoritesPokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
