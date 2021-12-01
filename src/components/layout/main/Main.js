import React from "react";

//IMPORT STYLES
import {
  MainContainer,
  Filters,
  Recommended,
  BtnFilter,
  Order,
  Recommend
} from "./Main.styles";

//IMPORT COMPONENTS
import Input from "../../elements/Input/Input";
import Button from "../../elements/button/Button";
import Color from "../../elements/color/Color";

const Main = () => {
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
          <Button label="Color" icon="location_on" icon2="expand_more" />
          <Button label="Ubicación" icon="location_on" icon2="expand_more" />
          <Button label="Centros" icon="school" icon2="expand_more" />
        </BtnFilter>
        <Recommended>
          <Order>Ordenar</Order>
          <Recommend>Recomendado</Recommend>
        </Recommended>
      </Filters>
    </MainContainer>
  );
};

export default Main;
