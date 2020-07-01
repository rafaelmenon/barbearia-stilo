import React from "react";
import { Body } from "./styles";

const ButtonComponent = ({ text, onClick, type }) => {
  return (
    <Body variant="outlined" onClick={onClick} type={type}>
      {text}
    </Body>
  );
};

export default ButtonComponent;
