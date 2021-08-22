import styled, { css } from "styled-components";

export const Header = styled.h1<{ textColor: string }>`
  color: ${p => p.textColor};
  text-align: center;
`;