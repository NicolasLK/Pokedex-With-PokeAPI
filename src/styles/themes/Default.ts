export interface PokemonColorCard {
  bug: string;
  dark: string;
  dragon: string;
  electric: string;
  fairy: string;
  fighting: string;
  fire: string;
  flying: string;
  ghost: string;
  grass: string;
  ground: string;
  ice: string;
  normal: string;
  poison: string;
  psychic: string;
  rock: string;
  steel: string;
  water: string;
}

export const defaultTheme = {
  colors: {
    backgroundWhite: "#ffffff",
    defaultInput: "#F2F2F2",
    pressedInput: "#E2E2E2",
    white: "#ffffff",
    black: "#17171B",
    blue: "#0e6f9f",
    gray: "#747476",

    backgroundCard: {
      bug: "#8BD674",
      dark: "#6F6E78",
      dragon: "#7383B9",
      electric: "#F2CB55",
      fairy: "#EBA8C3",
      fighting: "#EB4971",
      fire: "#FFA756",
      flying: "#748FC9",
      ghost: "#8571BE",
      grass: "#8BBE8A",
      ground: "#F78551",
      ice: "#91D8DF",
      normal: "#B5B9C4",
      poison: "#9F6E97",
      psychic: "#FF6568",
      rock: "#D4C294",
      steel: "#4C91B2",
      water: "#58ABF6",
    },
    boxType: {
      bug: "#8CB330",
      dark: "#58575F",
      dragon: "#0F6AC0",
      electric: "#EED535",
      fairy: "#ED6EC7",
      fighting: "#D04164",
      fire: "#FD7D24",
      flying: "#748FC9",
      ghost: "#556AAE",
      grass: "#62B957",
      ground: "#DD7748",
      ice: "#61CEC0",
      normal: "#9DA0AA",
      poison: "#A552CC",
      psychic: "#EA5D60",
      rock: "#BAAB82",
      steel: "#417D9A",
      water: "#4A90DA",
    },
    textColors: {
      white: "#ffffff",
      black: "#17171B",
      gray: "#747476",
    },
  },
  textSizes: {
    "title-size-xl": "3rem", //Titles
    "title-size-xl_mobile": "1.5rem", //Titles Mobile
    "title-size-m": "1.5rem", //SubTitles
    "title-size-m_mobile": "0.75rem", //SubTitles Mobile
    "title-size-s": "1.125rem", //2 Op SubTitles
    "text-regular-m": "1rem", //Normal Text
    "text-bold-m": "1rem", //Normal Text Bold
    "text-components-m": "0.875rem", //Normal Text Components
    "text-components-bold-m": "0.875rem", //Normal Text Components Bold
  },
  fonts: {
    regular: "Roboto",
    title: "Poppins",
  },
};
