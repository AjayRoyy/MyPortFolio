import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const HomeContainer = styled(Container)`
  flex-direction: column;
`;

export const Ninja = styled.img`
  width: 40%;
  height: auto;
  z-index: 1;
`;
