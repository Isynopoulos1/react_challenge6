import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES

import { ItemsWrapper, Cards } from "./Items.styles";

//IMPORT COMPONENTS
import Card from "../card/Card";

const Items = ({ list }) => {
  const mappedList = list.map(card => (
    <Card
      key={card.i}
      image={card.image}
      title={card.title}
      author={card.author}
      icon1={card.icon1}
      icon2={card.icon2}
      likes={card.likes}
      visibility={card.visibility}
    />
  ));

  //RENDER
  return (
    <ItemsWrapper>
      <Cards>{mappedList}</Cards>
    </ItemsWrapper>
  );
};
Items.propTypes = {
  list: PropTypes.array
};

Items.defaultProps = {
  list: []
};

export default Items;
