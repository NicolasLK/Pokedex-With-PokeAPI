//====================================================
import * as C from "./styles";

import pokeBall from "../../assets/pokeball.svg";
import { Link } from "react-router-dom";
//====================================================

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  url: string;
  name: string;
  types: PokemonType[];
}

interface CardProps {
  data: Pokemon;
}

export function Card({ data, ...rest }: CardProps) {
  return (
    <C.PokemonCard pokeType={data.types[0].type.name} {...rest}>
      <Link to={`pokemon/${data.id}`}>
        <C.Content>
          <C.CardDetails>
            <C.PokeId>#{data.id.toString().padStart(3, "0")}</C.PokeId>
            <C.PokeName>{data.name}</C.PokeName>
            <C.CardTypes>
              {data.types.map((pokemonType) => {
                return (
                  <C.Types
                    key={pokemonType.type.name}
                    pokeType={pokemonType.type.name}
                  >
                    <C.TypesText>{pokemonType.type.name}</C.TypesText>
                  </C.Types>
                );
              })}
            </C.CardTypes>
          </C.CardDetails>
          <C.PokeBallDetail src={pokeBall} />
          <C.ImgPokemon
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
          />
        </C.Content>
      </Link>
    </C.PokemonCard>
  );
}
