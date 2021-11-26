import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: center;
  border-bottom: 1px solid #ececec;
`;

export const MenuNav = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  right: 0;
  margin-right: 200px;
`;
export const MenuLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  grid-gap: 240 px;
  left: 0;
`;

export const NavLi = styled.ul`
  display: flex;
  font-family: helvetica;
  font-size: 12px;
  margin-left: 20px;
  grid-gap: 10px;
  font-weight: normal;
  width: 800px;
`;
export const ButtonLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 30px;
  font-family: helvetica;
  font-size: 12px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  margin-right: 10px;
`;
export const SignUp = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 30px;
  font-family: helvetica;
  font-size: 12px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  background-color: #0057ff;
  color: white;
`;

export const MenuImg = styled.img`
  display: flex;
  width: 50px;
  margin-left: 20px;
  margin-right: 0;
`;
