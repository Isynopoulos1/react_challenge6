import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  border: 1px solid black;
  margin-top: 20px;
  padding-top: 20px;
  left: 0;
  top: 0;
  &:first-of-type {
    margin-left: 10px;
  }
`;
export const ContentGrid = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  left: 0;
  top: 0;
  margin-right: 10px;
`;
export const Image = styled.div`
  display: flex;
  border: 1px solid black;
  width: 100%;
  height: 161px;
  background-position: center;
  background-size: cover;
  margin-top: 20px;
`;
export const CardImage = styled.img`
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 161px;
`;
export const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;
export const Project = styled.div`
  display: flex;
`;
export const Scope = styled.div`
  display: flex;
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
  color: black;
  font-family: "Material Icons";
  font-size: 10px;
`;
export const Icon2 = styled.i`
  position: absolute;
  color: black;
  font-family: "Material Icons";
  font-size: 10px;
`;
