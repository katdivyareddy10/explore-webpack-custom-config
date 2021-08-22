import React from "react";

import * as S from "./styles";

interface HeaderProps {
  title: String,
  textColor: "red" | "blue",
}

export const Header = (props: HeaderProps) => {
  const { title = "Untitled", textColor = "blue" } = props;

  return (
    <S.Header textColor={textColor}>
      {title}
    </S.Header>
  )
}