import React from "react";
import PropTypes from "prop-types";

//IMPORT COMPONENTS
import { BtnWrapper, NameFilter, IconStyle, IconStyle2 } from "./Button.styles";

const Button = ({ label, icon, icon2 }) => {
  return (
    <BtnWrapper>
      <IconStyle>{icon}</IconStyle>
      <NameFilter> {label}</NameFilter>
      <IconStyle2>{icon2}</IconStyle2>
    </BtnWrapper>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  icon2: PropTypes.string
};

Button.defaultProps = {
  label: "button 1",
  icon: "",
  icon2: ""
};

export default Button;
