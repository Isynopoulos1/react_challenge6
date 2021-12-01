import React from "react";

//IMPORT STYLES
import { MainContainer, Filters, BtnFilter } from "./Main.styles";

//IMPORT COMPONENTS
import Input from "../../elements/Input/Input";
import Button from "../../elements/button/Button";
import Sort from "../../elements/sort/Sort";
import Color from "../../elements/color/Color";

const Main = ({ icon }) => {
  return (
    <MainContainer>
      <Input />
      <Filters>
        <BtnFilter>
          <Button
            label="Sectores creativos"
            icon="people"
            icon2="expand_more"
          />
          <Button
            label="Herramientas"
            icon="construction"
            icon2="expand_more"
          />
          <Color />
          <Button label="Ubicación" icon="location_on" icon2="expand_more" />
          <Button label="Centros" icon="school" icon2="expand_more" />
        </BtnFilter>
        <Sort icon="expand_more" />
      </Filters>
    </MainContainer>
  );
};

export default Main;
