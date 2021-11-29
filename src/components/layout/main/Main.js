import React from "react";

//IMPORT STYLES
import { MainContainer } from "./Main.styles";

//IMPORT COMPONENTS
import Input from "../../elements/Input/Input";
import Specs from "../../elements/specs/Specs";

const Main = () => {
  return (
    <MainContainer>
      <Input />
      <Specs />
    </MainContainer>
  );
};

export default Main;
