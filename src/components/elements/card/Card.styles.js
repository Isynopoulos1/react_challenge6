import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  position: relative;
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
  justify-content: center;
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
  border-radius: 3px;
  background-position: center;
  background-size: cover;
  margin-top: 20px;
`;
export const CardImage = styled.img`
  display: flex;
  background-size: cover;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
`;
export const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
`;
export const Project = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Scope = styled.div`
  display: flex;
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 12px;
  color: black;
  font-family: helvetica;
  margin-bottom: 2px;
  margin-top: 20px;
  margin-left: 10px;
`;
export const Author = styled.div`
  font-weight: lighter;
  color: #444;
  font-size: 10px;

  font-family: helvetica;
  margin-left: 10px;
`;
export const Like = styled.div`
  display: flex;
`;
export const Visibility = styled.div`
  display: flex;
`;
export const Icon1 = styled.i`
  color: #959595;
  font-family: "Material Icons";
  font-size: 13px;
`;
export const Icon2 = styled.i`
  color: #959595;
  font-family: "Material Icons";
  font-size: 13px;
`;
