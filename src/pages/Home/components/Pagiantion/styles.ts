import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;

    max-width: 70rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      background: transparent;

      display: flex;
      align-items: center;

      padding: 0.25rem;

      border: none;

      cursor: pointer;

      > svg {
        font-size: 1.25rem;
      }
    }

    > div {
      padding: 0.25rem;

      > p {
        font-family: ${theme.fonts.title};
      }
    }
  `}
`;
