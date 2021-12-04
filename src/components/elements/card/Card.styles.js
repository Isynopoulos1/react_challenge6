import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  padding-top: 20px;
`;
export const ContentGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
`;
export const Image = styled.div`
  display: flex;
  border: 1px solid black;
  width: 100%;
  border-radius: 3px;
`;
export const CardImage = styled.img`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const CardDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-content: space-between;
  border: 1px solid black;
`;
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
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
export const Viewers = styled.div`
  display: flex;
`;
export const Likes = styled.div`
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
