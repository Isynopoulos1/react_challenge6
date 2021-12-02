import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  color: black;
  border: 1px solid black;
`;
export const Image = styled.div`
  display: flex;
  border: 1px solid black;

  height: 161px;
`;
export const CardImage = styled.img`
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
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
export const CardDetail = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 404px;
`;
export const Project = styled.div`
  display: flex;
`;
export const Scope = styled.div`
  display: flex;
`;
