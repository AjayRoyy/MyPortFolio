import React from "react";
import { Container } from "../style-components/HomeStyled";
import { Title } from "../style-components/CommonStyled";
import styled from "styled-components";

type Props = {};

const SocialMediaContainer = styled(Container)`
  height: 100%;
  width: 100%;
  justify-content: flex-end;
`;

const SecondContainer = styled(SocialMediaContainer)`
  width: 50%;
  left: 50%;
  overflow: hidden;
  justify-content: center;
`;

const Design = styled(SecondContainer)`
  background-color: white;
  height: 100vmin;
  width: 100vmin;
  scale: 0.7;
  rotate: 45deg;
  border-radius: 50px;
  order: 1;
`;

export const SocialMedia = (props: Props) => {
  return (
    <SocialMediaContainer>
      <Design>
        <SecondContainer>
          <Title className="rotate-[-45deg]" $light>
            SocialMedia
          </Title>
        </SecondContainer>
      </Design>
    </SocialMediaContainer>
  );
};
