import React from "react";

//IMPORT COMPONENTS
import Logo from "../../elements/logo/LogoBehance";

//IMPORT STYLES
import {
  HeaderContainer,
  MenuNav,
  MenuLogin,
  NavLi,
  ButtonLogin,
  SignUp
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <MenuNav>
        <Logo />
        <NavLi>
          <ul>Descubrir</ul>
          <ul>Transmisiones en directo</ul>
          <ul>Vacantes</ul>
        </NavLi>
      </MenuNav>
      <MenuLogin>
        <ButtonLogin>Iniciar Sesión</ButtonLogin>
        <SignUp>Registrarse</SignUp>
      </MenuLogin>
    </HeaderContainer>
  );
};

export default Header;
