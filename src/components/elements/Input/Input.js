import React from "react";

import { SearchBar, InputWrapper, InputList } from "./Input.styles";

const Input = () => {
  return (
    <InputWrapper>
      <SearchBar
        placeholder="Adéntrate en el mundo creativo mientras trabajas"
        name="name"
      />
      <nav>
        <ul>hola</ul>
        <ul>hola</ul>
        <ul>hola</ul>
      </nav>
    </InputWrapper>
  );
};

export default Input;
