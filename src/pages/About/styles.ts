import styled, { css } from "styled-components";

import { TypeName } from ".";

interface TypeProps {
  type: TypeName;
}

export const Container = styled.main<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;

    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;

    padding: 2.656rem 0 3.75rem 2.656rem;

    gap: 2rem;

    > a {
      display: flex;
      align-items: center;

      width: fit-content;
      height: fit-content;

      > svg {
        width: 1.75rem;
        height: 1.75rem;
        color: ${theme.colors.black};
      }
    }
  `}
`;

export const HeaderContent = styled.article`
  position: relative;

  display: flex;
  align-items: center;

  gap: 1.75rem;
`;

export const CicleImg = styled.img`
  width: 8.25rem;
  height: 8.25rem;
`;

export const ImgPokemon = styled.img`
  position: absolute;

  width: 8rem;
  height: 8rem;

  left: 0.5rem;
`;

export const HeaderSection = styled.section`
  display: flex;

  flex-direction: column;
`;

export const PokeID = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
    font-family: ${theme.fonts.title};
    font-size: ${theme.textSizes["title-size-m"]};

    line-height: 2rem;

    color: ${theme.colors.textColors.black};

    opacity: 0.6;

    @media (max-width: 375px) {
      font-size: ${theme.textSizes["title-size-m_mobile"]};

      line-height: 1rem;
    }
  `}
`;

export const PokeName = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
    font-family: ${theme.fonts.title};
    font-size: ${theme.textSizes["title-size-xl"]};
    font-style: normal;

    color: ${theme.colors.textColors.white};

    line-height: 3.25rem;

    text-transform: capitalize;
    margin-bottom: 0.375rem;

    @media (max-width: 375px) {
      font-size: ${theme.textSizes["title-size-xl_mobile"]};

      line-height: 1.625rem;
    }
  `}
`;

export const PokeTypes = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
`;

export const TypesBox = styled.div<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.boxType[type]};

    width: 4rem;
    height: 1.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 0.75rem;

    border-radius: 6px;

    margin-bottom: 0.375rem;
  `}
`;

export const TypesName = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: ${theme.textSizes["text-components-m"]};
    font-style: normal;

    line-height: 1rem;
    color: ${theme.colors.textColors.white};

    text-align: center;
    text-transform: capitalize;
  `}
`;

export const Content = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;

    gap: 1.25rem;

    padding: 1.25rem;

    border-top-right-radius: 40px;
    border-top-left-radius: 40px;

    margin-top: -2.5rem;

    @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const BaseStats = styled.section`
  display: flex;
  flex-direction: column;
`;

export const StatsTitle = styled.span<TypeProps>`
  ${({ theme, type }) => css`
    font-weight: 700;
    font-size: ${theme.textSizes["title-size-s"]};
    font-family: ${theme.fonts.title};

    line-height: 1.25rem;

    padding: 1.25rem;

    color: ${theme.colors.boxType[type]};

    text-transform: capitalize;
  `}
`;

export const StatsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.25rem;
`;

export const StatsName = styled.span<TypeProps>`
  ${({ theme, type }) => css`
    font-weight: 600;
    font-family: ${theme.fonts.title};
    font-size: ${theme.textSizes["text-bold-m"]};

    line-height: 1.125rem;

    color: ${theme.colors.boxType[type]};

    padding-left: 1.125rem;

    text-transform: uppercase;

    margin-bottom: 1.25rem;
  `}
`;

export const StatsValue = styled.span`
  ${({ theme }) => css`
    font-weight: 400;
    font-family: ${theme.fonts.regular};
    font-size: ${theme.textSizes["text-regular-m"]};

    line-height: 1.125rem;

    color: ${theme.colors.textColors.gray};

    margin-bottom: 1.25rem;
  `}
`;

export const BaseSkills = styled.section``;

export const SkillsTitle = styled.ul<TypeProps>`
  ${({ theme, type }) => css`
    font-weight: 700;
    font-size: ${theme.textSizes["title-size-s"]};
    font-family: ${theme.fonts.title};

    color: ${theme.colors.boxType[type]};

    line-height: 1.25rem;

    padding: 1.25rem;

    text-transform: capitalize;
  `}
`;

export const SkillName = styled.li`
  ${({ theme }) => css`
    font-weight: 400;
    font-family: ${theme.fonts.regular};
    font-size: ${theme.textSizes["text-regular-m"]};

    line-height: 1.125rem;

    color: ${theme.colors.textColors.gray};

    padding-left: 1.375rem;

    margin-bottom: 1.25rem;

    text-transform: capitalize;

    list-style: none;
  `}
`;

export const BaseDetails = styled.section`
  display: flex;
  flex-direction: column;
`;

export const DetailsTitle = styled.span<TypeProps>`
  ${({ theme, type }) => css`
    font-weight: 700;
    font-size: ${theme.textSizes["title-size-s"]};
    font-family: ${theme.fonts.title};

    color: ${theme.colors.boxType[type]};

    line-height: 1.25rem;

    padding: 1.25rem;

    text-transform: capitalize;
  `}
`;

export const DetailsBar = styled.div``;

export const DetailsName = styled.span<TypeProps>`
  ${({ theme, type }) => css`
    font-weight: 600;
    font-family: ${theme.fonts.title};
    font-size: ${theme.textSizes["text-bold-m"]};

    line-height: 1.125rem;

    color: ${theme.colors.boxType[type]};

    padding-left: 1.125rem;

    text-transform: uppercase;

    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
  `}
`;

export const DetailsValue = styled.p`
  ${({ theme }) => css`
    font-weight: 400;
    font-family: ${theme.fonts.regular};
    font-size: ${theme.textSizes["text-regular-m"]};

    line-height: 1.125rem;

    color: ${theme.colors.textColors.gray};

    margin-bottom: 1.25rem;
  `}
`;
