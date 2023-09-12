import React, { useEffect, useRef } from "react";
import {
  Title,
  SubTitle,
  TextWrapper,
  CustomAnchorTag,
} from "../style-components/CommonStyled";
import {
  Container,
  Ninja,
  HomeContainer,
} from "../style-components/HomeStyled";
import { PageLayout } from "./PageLayout";
import { SocialMedia } from "../components/SocialMedia";
import ninjapng from "../Images/cute-ninja-with-shuriken-cartoon-vector-icon-illustration-people-holiday-icon-concept-isolated-flat_-removebg-preview.png";

type Props = {};

const Home: React.FC = (props: Props): JSX.Element => {
  return (
    <div>
      <PageLayout>
        <Container className="mt-[-10vh]">
          <Ninja src={ninjapng} alt="Ninja Warrior" />
          <HomeContainer>
            <Title>Good Day Warrior,</Title>
            <SubTitle>Welcome To My Universe</SubTitle>
            <TextWrapper>
              <SubTitle>
                I am 'Ajay Kasarapu', most people know me as 'Ajay Roy'.
              </SubTitle>
              <SubTitle>
                I'm a Full Stack Developer specialised in MERN stack
                development.
              </SubTitle>
            </TextWrapper>
            <TextWrapper>
              <SubTitle>
                Founder of Coding Risers Educational Institution
              </SubTitle>
              <CustomAnchorTag as="a" href="">
                Check Out the Channel Here
              </CustomAnchorTag>
            </TextWrapper>
          </HomeContainer>
        </Container>
      </PageLayout>
      <SocialMedia />
    </div>
  );
};

export default Home;
