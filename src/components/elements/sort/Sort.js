import React from "react";
import PropTypes from "prop-types";

import { SortMenu, Order, Recommend, Selector } from "./Sort.styles";

const Sort = ({ icon }) => {
  return (
    <SortMenu>
      <Order>Ordenar</Order>
      <Recommend>Recomendado</Recommend>
      <Selector>{icon}</Selector>
    </SortMenu>
  );
};

Sort.propTypes = {
  icon: PropTypes.string
};

Sort.defaultProps = {
  icon: ""
};

export default Sort;
