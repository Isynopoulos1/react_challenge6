import React from "react";
import PropTypes from "prop-types";

//IMPORT COMPONENTS
import { BtnWrapper, NameFilter, IconStyle } from "./Button.styles";

const Button = ({ label, icon }) => {
  return (
    <BtnWrapper>
      <NameFilter> {label}</NameFilter>
      <IconStyle>{icon}</IconStyle>
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
