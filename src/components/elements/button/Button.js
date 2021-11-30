import React from "react";
import PropTypes from "prop-types";

//IMPORT COMPONENTS
import { BtnWrapper, NameFilter, IconStyle } from "./Button.styles";

const Button = ({ label, icon }) => {
  return (
    <BtnWrapper>
      <IconStyle>{icon}</IconStyle>
      <NameFilter> {label}</NameFilter>
    </BtnWrapper>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string
};

Button.defaultProps = {
  label: "button 1",
  icon: ""
};

export default Button;
