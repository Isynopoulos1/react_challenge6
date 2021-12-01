import styled from "styled-components";

export const ColorBtn = styled.div`
  display: flex;
  border: 1px solid #e8e8e8;
  background-color: transparent;
  border-radius: 3px;
  margin-right: 10px;
  padding: 4px 8px 4px 8px;
  cursor: pointer;
  &:hover {
    background-color:white;
    border: 1px solid black;

`;
export const ColorImg = styled.img`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: helvetica;
  font-size: 11px;
  font-weight: 600;
`;

export const IconArrow = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Material Icons";
  font-size: 10px;
  padding: 3px;
`;
