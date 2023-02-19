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

//   display: flex;
//   justify-content: space-around;
//   align-items: center;

//   gap: 0.25rem;

//   flex-wrap: wrap;

//   padding: 0.375rem;

//   border: 1px solid;
// `;

// export const SearchContainer = styled.div`
//   ${({ theme }) => css`
//     position: relative;
//     display: flex;
//     align-items: center;
//     width: fit-content;

//     > svg {
//       position: absolute;

//       font-weight: bold;
//       font-size: ${theme.textSizes["pokeName-size"]};
//       color: ${theme.colors.textColor.gray};

//       margin-left: 0.375rem;
//       margin-right: 0.375rem;
//     }

//     > input {
//       min-width: 67.5rem;

//       border-radius: 8px;

//       text-align: left;

//       padding: 0.75rem 0.75rem 0.75rem 2.05rem;

//       font-weight: 400;
//       font-size: ${theme.textSizes["description-size"]};

//       line-height: 1.125rem;
//     }

//     opacity: 0;
//     animation: comeLeft 3s forwards;

//     @keyframes comeLeft {
//       0% {
//         transform: translateX(-50px);
//       }

//       100% {
//         opacity: 1;
//       }
//     }
//   `}
// `;
