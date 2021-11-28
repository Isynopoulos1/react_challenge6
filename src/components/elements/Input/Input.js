import React from "react";

import { SearchBar, InputWrapper } from "./Input.styles";

const Input = () => {
  return (
    <InputWrapper>
      <SearchBar
        placeholder="Adéntrate en el mundo creativo mientras trabajas"
        name="name"
      />
    </InputWrapper>
  );
};

export default Input;
