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
