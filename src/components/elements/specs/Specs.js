import React from "react";

//IMPORT STYLES
import {
  SpecsField,
  Sectores,
  Herramientas,
  Color,
  Ubicacion,
  Centros
} from "./Specs.styles";

const Specs = () => {
  return (
    <SpecsField>
      <Sectores>Sectores</Sectores>
      <Herramientas>Herramientas</Herramientas>
      <Color>Color</Color>
      <Ubicacion>Ubicación</Ubicacion>
      <Centros>Centros</Centros>
    </SpecsField>
  );
};

export default Specs;
