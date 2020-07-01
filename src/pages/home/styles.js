import styled from "styled-components";
import Image from "../../assets/images/image56.png";
import { Typography } from "@material-ui/core";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
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

export const Title = styled(Typography)`
  font-weight: 700 !important;
  text-align: center !important;
`;

export const Text = styled(Typography)`
  text-align: center !important;
  font-weight: 100 !important;
`;

export const SessionBtn = styled.div`
  margin-top: 15%;
  margin-bottom: 10%;
`;

export const Create = styled(Typography)`
  margin-top: 15px !important;
  font-weight: 500 !important;
`;
