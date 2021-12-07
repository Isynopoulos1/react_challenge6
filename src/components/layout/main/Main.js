import React from "react";

//IMPORT STYLES
import { MainContainer } from "./Main.styles";

//IMPORT COMPONENTS
import Items from "../../elements/items/Items";

//IMPORT DATA
import { list1, list2, list3 } from "../../data/cards";

const Main = () => {
  return (
    <MainContainer>
      <Items list={list1} />
      <Items list={list2} />
      <Items list={list3} />
    </MainContainer>
  );
};

export default Main;
