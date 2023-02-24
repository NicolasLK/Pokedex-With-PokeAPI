import { useEffect, useState } from "react";
//====================================================
import { Api } from "../../services";
//====================================================
import { Card, Pokemon, PokemonType } from "../../components/Card";
//====================================================
import * as H from "./styles";

import { NavBar } from "../../components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { Pagination } from "./components/Pagiantion";

//====================================================

interface Request {
  id: number;
  types: PokemonType[];
}

export function Home() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  //============================================
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const limit = 36;
  const offset = limit * page;

  async function getAllPokemons() {
    const response = await Api.get(`/pokemon?limit=${limit}&offset=${offset}`);
    const { results } = response.data;
    const totalCount = response.data.count;

    // payloadPokemons - Chama tds os Links q estao na Api/pokemon
    const payloadPokemons = await Promise.all(
      results.map(async (pokemon: Pokemon) => {
        const { id, types } = await getMoreInfo(pokemon.url);

        return {
          name: pokemon.name,
          id,
          types,
        };
      })
    );

    setPokemons(payloadPokemons);
    //================================
    setTotalPages(Math.ceil(totalCount / limit));
  }

  // getMoreInfo - dessestrutura o campo url da chamada payloadPokemons, e chama os dados de cada pokemon da pagina
  async function getMoreInfo(url: string): Promise<Request> {
    const response = await Api.get(url);
    const { id, types } = response.data;

    return {
      id,
      types,
    };
  }

  // pokemonFilter - filta o nome do pokemon
  const pokemonFilter = (name: string) => {
    var filteredPokemons = [];
    if (name === "") {
      getAllPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  // Botoes de navegacao
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  //============================================

  useEffect(() => {
    getAllPokemons();
  }, [page]);

  return (
    <H.Container>
      <NavBar />
      <SearchBar pokemonFilter={pokemonFilter} />
      <H.Content>
        <span>pokedex</span>
        <H.PokeList>
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            leftClick={onLeftClickHandler}
            rightClick={onRightClickHandler}
          />
          {pokemons.map((pokemon) => {
            return <Card key={pokemon.id} data={pokemon} />;
          })}
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            leftClick={onLeftClickHandler}
            rightClick={onRightClickHandler}
          />
        </H.PokeList>
      </H.Content>
    </H.Container>
  );
}

{
  /* <H.PokeList>
<H.SearchContainer>
  <MagnifyingGlass weight="bold" />
  <input
    type="text"
    placeholder="What Pokémon are you looking for?"
    onChange={(e) => filterPokemonName(e.target.value)}
  />
</H.SearchContainer>
{pokemons.map((pokemon) => {
  return (
    <Link key={pokemon.id} to={`/home/pokemon/${pokemon.id}`}>
      <Card data={pokemon} />
    </Link>
  );
})}
<Button text="More Pokemons" OnClick={getNamePokemon} />
</H.PokeList> */
}
