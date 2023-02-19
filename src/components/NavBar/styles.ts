import styled, { css } from "styled-components";

export const Container = styled.header``;

export const Content = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 0.75rem;
`;

export const Logo = styled.img`
  width: 10rem;
`;

// export const ImgHeader = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: fit-content;
// `;

// export const Apresentation = styled.div`
//   position: absolute;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   gap: 0.625rem;
// `;

// export const Title = styled.h1`
//   ${({ theme }) => css`
//     font-size: ${theme.textSizes["title-size"]};

//     line-height: 4.375rem;
//     text-align: center;
//   `}
// `;

// export const Description = styled.p`
//   ${({ theme }) => css`
//     font-size: ${theme.textSizes["description-size"]};
//     color: ${theme.colors.textColor.gray};

//     line-height: 1.125rem;
//     text-align: center;
//   `}
// `;
