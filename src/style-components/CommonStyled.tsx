import styled from "styled-components";
import { RouterLink } from "../utils/RouterLink";

export const AppContainer = styled.div``;

export const Title = styled.h1<{ $light?: boolean }>`
  color: ${(props) => (props.$light ? "black" : "aliceblue")};
  font-size: 60px;
  font-weight: bold;
  text-shadow: 0px 0px 2px white;
  font-family: "Montserrat", sans-serif;
`;

export const SubTitle = styled(Title)`
  font-size: 20px;
  text-align: center;
  letter-spacing: 2px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MergeComponents = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
`;

export const CustomListItems = styled.li`
  list-style: none;
  color: white;
  text-shadow: 0px 0px 10px black;
  font-size: 20px;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 50px;
`;

export const CustomAnchorTag = styled(CustomListItems)`
  padding: 0;
`;

export const RouterLinkStyled = styled(RouterLink)<{
  $primary?: boolean;
}>`
  background: ${(props) => props.$primary && "none !important"};
  text-decoration: none;
  color: black;
  border-radius: 50px;
  z-index: 1;
`;
