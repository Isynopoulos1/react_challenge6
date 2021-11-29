import React from "react";

//IMPORT STYLES
import { MainContainer } from "./Main.styles";

//IMPORT COMPONENTS
import Input from "../../elements/Input/Input";
import Button from "../../elements/button/Button";

const Main = () => {
  return (
    <MainContainer>
      <Input />
      <Button />
    </MainContainer>
  );
};

export default Main;
