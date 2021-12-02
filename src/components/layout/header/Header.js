import React from "react";

//IMPORT COMPONENTS
import Logo from "../../elements/logo/LogoBehance";
import Input from "../../elements/Input/Input";
import Button from "../../elements/button/Button";
import Sort from "../../elements/sort/Sort";
import Color from "../../elements/color/Color";

//IMPORT STYLES
import {
  HeaderContainer,
  MenuNav,
  MenuLogin,
  NavLi,
  ButtonLogin,
  SignUp,
  MenuImg,
  FiltersContainer,
  Filters,
  BtnFilter,
  PrimaryNav
} from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <PrimaryNav>
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
      </PrimaryNav>

      <FiltersContainer>
        <Input />
        <Filters>
          <BtnFilter>
            <Button
              label="Sectores creativos"
              icon="people"
              icon2="expand_more"
            />
            <Button
              label="Herramientas"
              icon="construction"
              icon2="expand_more"
            />
            <Color />
            <Button label="Ubicación" icon="location_on" icon2="expand_more" />
            <Button label="Centros" icon="school" icon2="expand_more" />
          </BtnFilter>
          <Sort icon="expand_more" />
        </Filters>
      </FiltersContainer>
    </HeaderContainer>
  );
};

export default Header;
