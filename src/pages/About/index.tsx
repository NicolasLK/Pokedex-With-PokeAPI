import { ArrowLeft } from "phosphor-react";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { useTheme } from "styled-components";
import { PokemonColorCard } from "../../styles/themes/Default";

import { Api } from "../../services";

import circle from "../../assets/circle.svg";

import * as A from "./styles";

interface Abilities {
  ability: {
    name: string;
  };
}

interface Stats {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonType {
  type: {
    name:
      | "bug"
      | "dark"
      | "dragon"
      | "electric"
      | "fairy"
      | "fighting"
      | "fire"
      | "flying"
      | "ghost"
      | "grass"
      | "ground"
      | "ice"
      | "normal"
      | "poison"
      | "psychic"
      | "rock"
      | "steel"
      | "water";
  };
}

interface PokemonProps {
  id: number;
  abilities: Abilities[];
  name: string;
  stats: Stats[];
  types: PokemonType[];
  color: string;
  base_experience: number;
  weight: number;
  height: number;
}

export function About() {
  const { pokemonId } = useParams();

  const { colors } = useTheme();

  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonsDetails() {
      try {
        const response = await Api.get(`/pokemon/${pokemonId}`);
        const {
          id,
          abilities,
          name,
          stats,
          types,
          base_experience,
          weight,
          height,
        } = response.data;

        const currentType = types[0].type.name;

        const color =
          colors.backgroundCard[currentType as keyof PokemonColorCard];

        setPokemon({
          id,
          abilities,
          name,
          stats,
          types,
          color,
          base_experience,
          weight,
          height,
        });

        setLoad(false);
      } catch (err) {
        console.log(err);
        setLoad(false);
      } finally {
        setLoad(false);
      }
    }

    getPokemonsDetails();
  }, []);

  return (
    <>
      {load ? (
        <>
          <p>Carregando...</p>
        </>
      ) : (
        <A.Container type={pokemon.types[0].type.name}>
          <A.Header>
            <Link to="/">
              <ArrowLeft weight="bold" />
            </Link>
            <A.HeaderContent>
              <A.CicleImg src={circle} />
              <A.ImgPokemon
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              />
              <A.HeaderSection>
                <A.PokeID>#{pokemon.id.toString().padStart(3, "0")}</A.PokeID>
                <A.PokeName>{pokemon.name}</A.PokeName>
                <A.PokeTypes>
                  {pokemon.types.map(({ type }) => {
                    return (
                      <A.TypesBox key={type.name} type={type.name}>
                        <A.TypesName>{type.name}</A.TypesName>
                      </A.TypesBox>
                    );
                  })}
                </A.PokeTypes>
              </A.HeaderSection>
            </A.HeaderContent>
          </A.Header>
          <A.Content>
            <A.BaseStats>
              <A.StatsTitle type={pokemon.types[0].type.name}>
                base stats
              </A.StatsTitle>
              {pokemon.stats.map((attribute) => {
                return (
                  <A.StatsBar key={attribute.stat.name}>
                    <A.StatsName type={pokemon.types[0].type.name}>
                      {attribute.stat.name}
                    </A.StatsName>
                    <A.StatsValue>{attribute.base_stat}</A.StatsValue>
                  </A.StatsBar>
                );
              })}
            </A.BaseStats>
            <A.BaseSkills>
              <A.SkillsTitle type={pokemon.types[0].type.name}>
                skills
              </A.SkillsTitle>
              {pokemon.abilities.map((currentAbilitie) => {
                return (
                  <A.SkillName key={currentAbilitie.ability.name}>
                    {currentAbilitie.ability.name}
                  </A.SkillName>
                );
              })}
            </A.BaseSkills>
            <A.BaseDetails>
              <A.DetailsTitle type={pokemon.types[0].type.name}>
                details
              </A.DetailsTitle>
              <A.DetailsBar>
                <A.DetailsName type={pokemon.types[0].type.name}>
                  base exp:
                  <A.DetailsValue>{pokemon.base_experience}</A.DetailsValue>
                </A.DetailsName>
              </A.DetailsBar>
              <A.DetailsBar>
                <A.DetailsName type={pokemon.types[0].type.name}>
                  height:{" "}
                  <A.DetailsValue>{pokemon.height / 10} m</A.DetailsValue>
                </A.DetailsName>
              </A.DetailsBar>
              <A.DetailsBar>
                <A.DetailsName type={pokemon.types[0].type.name}>
                  weight:{" "}
                  <A.DetailsValue>{pokemon.weight / 10} kg</A.DetailsValue>
                </A.DetailsName>
              </A.DetailsBar>
            </A.BaseDetails>
          </A.Content>
        </A.Container>
      )}
    </>
  );
}
