import { MagnifyingGlass } from "phosphor-react";

import * as S from "./styles";

interface FilterProps {
  pokemonFilter: (name: string) => void;
}

export function SearchBar({ pokemonFilter }: FilterProps) {
  return (
    <S.Container>
      <MagnifyingGlass size={20} />
      <input
        type="text"
        placeholder="What Pokémon are you looking for?"
        onChange={(e) => pokemonFilter(e.target.value)}
      />
    </S.Container>
  );
}
