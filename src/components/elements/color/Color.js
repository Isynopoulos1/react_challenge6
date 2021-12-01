import React from "react";
import PropTypes from "prop-types";

import { ColorImg, ColorBtn, Name, IconArrow } from "./Color.styles";

const Color = ({ icon }) => {
  return (
    <ColorBtn>
      <ColorImg
        src="https://ik.imagekit.io/ppayaz/react_challenge6/Captura_de_Pantalla_2021-11-30_a_la_s__15.56.33_LXP8O56UB.png?updatedAt=1638309617282"
        alt="logo"
      />
      <Name>Color</Name>
      <IconArrow>{icon}</IconArrow>
    </ColorBtn>
  );
};

Color.propTypes = {
  icon: PropTypes.string
};

Color.defaultProps = {
  icon: "expand_more"
};

export default Color;
