import * as N from "./styles";

import PokeApi from "../../assets/PokeAPI.png";

export function NavBar() {
  return (
    <N.Container>
      <N.Content>
        <N.Logo alt="Api Logo" src={PokeApi} />
      </N.Content>
    </N.Container>
  );
}

{
  /* <X.ImgHeader src={halfPokeBall} />
      <X.Apresentation>
        <X.Title>Pokedex</X.Title>
        <X.Description>
          Search for Pokémon by name or using the National Pokédex number.
        </X.Description>
      </X.Apresentation> */
}
