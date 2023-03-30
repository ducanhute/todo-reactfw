import React from "react";
import Button from "@atlaskit/button";
import styled from "styled-components";
const ButtonStyle = styled(Button)`
  margin-top: 5px;
  text-align: left;
`;

export default function Todo() {
  return <ButtonStyle shouldFitContainer>Item1</ButtonStyle>;
}
