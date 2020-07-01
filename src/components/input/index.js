import React from "react";
import { Body, Input, Label } from "./styles";

const InputComponent = ({ label, name, placeholder, value, onChange }) => {
  return (
    <Body>
      <Label>{label}</Label>
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Body>
  );
};

export default InputComponent;
