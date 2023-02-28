import styled, { css } from "styled-components";

export const Container = styled.main``;

export const Content = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: 1rem;

    width: 100%;

    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;

    > span {
      margin-top: 0.75rem;
      font-family: ${theme.fonts.title};
      font-weight: 700;
      font-size: ${theme.textSizes["title-size-xl"]};

      text-transform: capitalize;
    }
  `}
`;

export const PokeList = styled.section`
  display: flex;

  padding: 0.5rem;

  gap: 1.125rem;

  flex-wrap: wrap;
`;
