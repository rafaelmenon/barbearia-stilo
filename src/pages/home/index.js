import React from "react";
import Button from "../../components/button";
import { Main, Body, Title, Text, SessionBtn, Create } from "./styles";
import history from "../../services/history";

const Home = () => {
  return (
    <Main>
      <Body>
        <Title>Seja bem vindo(a)!</Title>
        <Text>
          Para que possamos agendar seu horário, faça login ou crie uma conta.
          Prometo que será rápido
        </Text>
        <SessionBtn>
          <Button text="Entrar" onClick={() => history.push("/login")} />
          <Create>Cadastrar</Create>
        </SessionBtn>
      </Body>
    </Main>
  );
};

export default Home;
