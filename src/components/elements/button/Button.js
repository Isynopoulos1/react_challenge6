import React from "react";
import PropTypes from "prop-types";

//IMPORT COMPONENTS
import {
  BtnWrapper,
  ButtonStyle,
  NameFilter,
  Name,
  Icon,
  IconStyle
} from "./Button.styles";

const Button = ({ label, icon }) => {
  return (
    <BtnWrapper>
      <NameFilter>
        {label} {icon}
      </NameFilter>
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
