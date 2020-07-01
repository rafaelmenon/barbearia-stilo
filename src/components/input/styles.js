import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Body = styled.div`
  width: 100%;
`;

export const Label = styled(Typography)`
  font-size: 12px !important;
  margin-bottom: 6px !important;
  text-align: left !important;
`;

export const Input = styled.input`
  height: 35px;
  width: 97%;
  border: none;
  border-radius: 3px;
  color: #000;
`;
