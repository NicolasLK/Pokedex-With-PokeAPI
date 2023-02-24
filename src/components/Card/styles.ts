import styled, { css } from "styled-components";

interface PokemonTypeProps {
  pokeType: string;
}

export const PokemonCard = styled.div<PokemonTypeProps>`
  ${({ theme, pokeType }) => css`
    background-color: ${theme.colors.backgroundCard[pokeType]};

    display: flex;
    align-items: center;
    justify-content: center;

    width: 22.25rem;

    border: none;
    border-radius: 8px;

    padding: 0.875rem;
  `}
`;

export const Content = styled.div`
  position: relative;

  display: flex;
  align-content: center;

  gap: 0.75rem;

  padding: 0.125rem;

  border: none;
  background: none;
`;

export const ImgPokemon = styled.img`
  position: absolute;

  width: 6rem;
  height: 6rem;

  right: -1.2rem;
`;

export const CardDetails = styled.span`
  display: flex;
  flex-direction: column;

  gap: 0.375rem;
`;

export const PokeId = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.title};
    font-weight: 700;
    font-size: ${theme.textSizes["title-size-s"]};

    color: ${theme.colors.textColors.black};

    opacity: 0.7;

    text-align: left;
  `}
`;

export const PokeName = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.title};
    font-size: ${theme.textSizes["title-size-m"]};
    font-weight: 700;

    color: ${theme.colors.textColors.white};

    text-align: left;

    text-transform: capitalize;
  `}
`;

export const PokeBallDetail = styled.img`
  right: -1.25rem;
  opacity: 0.5;
`;

export const CardTypes = styled.span`
  display: flex;
  align-items: center;

  gap: 0.25rem;
`;

export const Types = styled.span<PokemonTypeProps>`
  ${({ theme, pokeType }) => css`
    width: 4rem;
    height: 1.5rem;

    display: flex;

    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.boxType[pokeType]};

    padding: 0.375rem;

    border-radius: 6px;

    text-transform: capitalize;
  `}
`;

export const TypesText = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-weight: 500;
    font-size: ${theme.textSizes["text-regular-m"]};
    color: ${theme.colors.textColors.white};

    line-height: 1.125rem;
  `}
`;

//===============================================
// Left Side

// export const LeftSide = styled.div

//   position: relative;

//   display: flex;
//   flex-direction: column;

//   width: 50%;
// `;

// export const PokeId = styled.span`
//   ${({ theme }) => css`
//     font-weight: bold;
//     font-size: ${theme.textSizes["pokeNumber-size"]};
//     line-height: 0.875rem;

//     color: ${theme.colors.textColor.black};

//     text-align: left;

//     max-width: 1.75rem;

//     opacity: 0.6;
//   `}
// `;

// export const PokeName = styled.span`
//   ${({ theme }) => css`
//     font-weight: bold;
//     font-size: ${theme.textSizes["pokeName-size"]};
//     line-height: 2rem;

//     color: ${theme.colors.textColor.white};

//     margin-bottom: 0.375rem;

//     text-transform: capitalize;
//   `}
// `;

// export const ContentType = styled.div`
//   display: flex;
//   gap: 0.375rem;
// `;

// export const PokeType = styled.div<PokemonTypeProps>`
//   ${({ theme, pokeType }) => css`
//     background-color: ${theme.colors.boxType[pokeType]};

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     width: 4rem;
//     height: 1.5rem;

//     padding: 0.25rem;

//     border-radius: 3px;
//   `}
// `;

// export const PokeTypeText = styled.span`
//   ${({ theme }) => css`
//     font-weight: 400;
//     font-size: ${theme.textSizes["pokeType-size"]};
//     line-height: 0.875rem;

//     color: ${theme.colors.textColor.white};

//     text-transform: capitalize;
//   `}
// `;

//===============================================
// Right Side

// export const RightSide = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   position: relative;
//   width: 50%;
// `;

// export const ImgPokemonCard = styled.img`
//   margin-top: -2.5rem;
//   width: 8.125rem;
//   height: 8.125rem;
// `;

// export const PokeBallDetail = styled.img`
//   position: absolute;

//   right: -1.25rem;
// `;
