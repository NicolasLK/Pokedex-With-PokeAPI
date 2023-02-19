import styled, { css } from "styled-components";

export const Container = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: 1rem;

    max-width: 70rem;
    margin-top: 1.25rem;
    margin-right: auto;
    margin-left: auto;

    > input {
      flex: 1;
      border-radius: 6px;
      border: 0;
      background-color: ${theme.colors.defaultInput};
      padding: 1rem 1rem 1rem 2.5rem;

      font-size: ${theme.textSizes["text-components-m"]};

      line-height: ${theme.textSizes["text-regular-m"]};

      &::placeholder {
        color: ${theme.colors.black};
      }
    }

    > svg {
      position: absolute;
      margin-left: 0.875rem;
    }
  `}
`;
