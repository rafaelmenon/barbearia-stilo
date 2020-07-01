import React from "react";
import Image from "../../assets/images/logo.png";
import Input from "../../components/input";
import Button from "../../components/button";
import { Body, Main, Logo, Spacing, NotAccount } from "./styles";

const Login = () => {
  return (
    <Main>
      <Body>
        <Logo src={Image} />
        <Input
          label="E-mail"
          placeholder="Digite o email cadastrado"
          type="email"
        />
        <Spacing />
        <Input label="Senha" placeholder="Digite sua senha" type="password" />
        <Spacing />
        <Button text="Acessar" />
        <NotAccount>
          Ainda não possui conta? <br /> Faça seu cadastro.
        </NotAccount>
      </Body>
    </Main>
  );
};

export default Login;
