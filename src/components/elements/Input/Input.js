import React from "react";

import { SearchBar, InputWrapper, InputList, Proyectos } from "./Input.styles";

const Input = () => {
  return (
    <InputWrapper>
      <SearchBar
        placeholder="Adéntrate en el mundo creativo mientras trabajas"
        name="name"
      />
      <InputList>
        <Proyectos>
          <ul>Proyectos</ul>
        </Proyectos>
        <ul>Imágenes</ul>
        <ul>Prototipos</ul>
        <ul>Personas</ul>
        <ul>Tendencias</ul>
      </InputList>
    </InputWrapper>
  );
};

export default Input;
