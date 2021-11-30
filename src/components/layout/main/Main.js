import React from "react";

//IMPORT STYLES
import { MainContainer, Filters } from "./Main.styles";

//IMPORT COMPONENTS
import Input from "../../elements/Input/Input";
import Button from "../../elements/button/Button";

const Main = () => {
  return (
    <MainContainer>
      <Input />
      <Filters>
        <Button label="Sectores creativos" icon="people" />
        <Button label="Herramientas" icon="person" />
        <Button label="Herramientas" icon="people" />
        <Button label="Herramientas" icon="people" />
        <Button label="Herramientas" icon="people" />
      </Filters>
    </MainContainer>
  );
};

export default Main;
