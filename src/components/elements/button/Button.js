import React from "react";
import PropTypes from "prop-types";

//IMPORT COMPONENTS
import { BtnWrapper, ButtonStyle } from "./Button.styles";

const Button = ({ label }) => {
  return (
    <BtnWrapper>
      <ButtonStyle>{label}</ButtonStyle>
    </BtnWrapper>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string
};

Button.defaultProps = {
  label: "button 1",
  icon: "text"
};

export default Button;
