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
  SignUp,
  MenuImg
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
        <MenuImg
          src="https://ik.imagekit.io/ppayaz/react_challenge6/adobe-logo-black-and-white-3_cyuSCwAF6.png?updatedAt=1637642278844"
          alt="logo"
        />
      </MenuLogin>
    </HeaderContainer>
  );
};

export default Header;
