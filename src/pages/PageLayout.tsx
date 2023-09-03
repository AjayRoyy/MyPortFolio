import styled from "styled-components";

type Props = {
  children: JSX.Element;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <>{children}</>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
