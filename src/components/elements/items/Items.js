import React from "react";
import PropTypes from "prop-types";

//IMPORT STYLES

import { ItemsWrapper, Cards } from "./Items.styles";

//IMPORT COMPONENTS
import Card from "../card/Card";

const Items = ({ list }) => {
  const mappedList = list.map(card => (
    <Card
      key={card.image}
      image={card.image}
      title={card.title}
      author={card.author}
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
