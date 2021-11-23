import React from "react";

//IMPORT COMPONENTS
import Logo from "../../elements/logo/LogoBehance";

//IMPORT STYLES
import { HeaderContainer, MenuNav, MenuLogin } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <MenuNav>
        <Logo />
      </MenuNav>
      <MenuLogin></MenuLogin>
    </HeaderContainer>
  );
};

export default Header;
