import styled from "styled-components";
import Image from "../../assets/images/image56.png";
import { Typography } from "@material-ui/core";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${Image}) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Body = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Logo = styled.img`
  width: 70%;
  margin-bottom: 10px;
`;

export const Spacing = styled.div`
  margin-top: 20px;
`;

export const NotAccount = styled(Typography)`
  font-size: 15px !important;
  margin-top: 20px !important;
  text-align: center !important;
`;
