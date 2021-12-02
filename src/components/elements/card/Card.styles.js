import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 334px;
  height: 261px;
  margin-top: 20px;
  color: black;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 10px;
  color: black;
  font-family: helvetica;
  margin-bottom: 30px;
  margin-top: 20px;
  margin-left: 10px;
`;
export const Author = styled.div`
  font-weight: 600;
  color: #444;
  font-size: 1.5rem;
  line-height: 1.33;
  font-family: helvetica;
  margin-left: 10px;
`;
export const Icon1 = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-family: "Material Icons";
  font-size: 10px;
`;
export const Icon2 = styled.i`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-family: "Material Icons";
  font-size: 10px;
`;
