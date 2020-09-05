import React from "react";

import TopWrapper from "../Components/TopWrapper";
import HeroIllustration from "../assets/Hero-illustration.svg";
import Class from "../assets/Class.svg";
import Counsel from "../assets/Counsel.svg";
import Courses from "../assets/Courses.svg";
import Register from "../assets/Register.svg";
import StyledButton from "../Components/Button";
import Pill from "../Components/Pill";
import styled from "styled-components";
import ServiceCards from "../Components/ServiceCards";
import FooterContainer from "../Components/FooterContainer";
import { SectionHead } from "../Components/Styles";
import { Link } from "react-router-dom";
import Header from "../Components/Nav/Header";

const Wrapper = styled(TopWrapper)`
  height: calc(100vh - 78px);
  & .hero-illustration {
    align-self: flex-end;
  }

  & .hero-content {
    margin: 24px 8px;
  }
`;

const Services = styled.div`
  padding: 32px 8vw;
  text-align: center;
`;

const SubHeading = styled.h3`
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.lParagraph};
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 32px -8px;
`;

const SocialProof = styled(CardContainer)`
  margin: 32px -8px;

  & .count {
    flex: 1;
    flex-basis: 40%;
    padding: 8px 20px;
    margin: 8px 0;
    text-align: center;
  }
  & h1 {
    color: ${({ theme }) => theme.colors.dGreen};
    font-size: 42px;
    font-weight: bold;
  }
  & p {
    color: ${({ theme }) => theme.colors.lHeading};
    font-size: 20px;
    font-weight: 400;
    margin: 12px;
    margin-bottom: 0;
  }
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 32px -8px;
`;

const CoursePill = styled(Pill)`
  padding: 8px 20px;
  margin: 0 8px;
  margin-bottom: 12px;
  width: auto;
  color: ${(props) => props.theme.colors.dHeading};
  border: 1.5px solid ${({ theme }) => theme.colors.dHeading};
  border-radius: 40px;

  &:hover {
    border: 1.5px solid ${({ theme }) => theme.colors.dHeading};
    background-color: ${({ theme }) => theme.colors.dHeading};
    color: ${({ theme }) => theme.colors.lHeading};
    transition: background-color 0.5s ease;
  }
`;

function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="hero-illustration">
          <img src={HeroIllustration} alt="illustration" />
        </div>

        <div className="hero-content">
          <h1>Education Mandal</h1>
          <h4>
            But I must explain to you how all this mistaken idea of denouncing
          </h4>
        </div>

        <StyledButton as={Link} to="/class">
          View Class/Course
        </StyledButton>
      </Wrapper>

      <Services>
        <SectionHead>Explore almost everything!</SectionHead>
        <SubHeading>
          Get all result, we provide best experience here.
        </SubHeading>

        <CardContainer>
          <ServiceCards>
            <img src={Class} alt="class" />
            <h1 className="title">Class</h1>
            <SubHeading>Find your best result</SubHeading>
          </ServiceCards>

          <ServiceCards>
            <img src={Courses} alt="courses" />
            <h1 className="title">Top Courses</h1>
            <SubHeading>Want to grow?</SubHeading>
          </ServiceCards>

          <ServiceCards>
            <img src={Register} alt="register" />
            <h1 className="title">Register</h1>
            <SubHeading>Unlimited features!</SubHeading>
          </ServiceCards>

          <ServiceCards>
            <img src={Counsel} alt="counsel" />
            <h1 className="title">Counselor</h1>
            <SubHeading>Want expert advice?</SubHeading>
          </ServiceCards>
        </CardContainer>

        <SocialProof>
          <div className="count">
            <h1>1</h1>
            <p>Total Classes</p>
          </div>
          <div className="count">
            <h1>2</h1>
            <p>Admission Applications</p>
          </div>
          <div className="count">
            <h1>8</h1>
            <p>Registered Users</p>
          </div>
          <div className="count">
            <h1>7</h1>
            <p>Satisfied Users</p>
          </div>
        </SocialProof>
      </Services>
      <FooterContainer>
        <SectionHead light>Top Courses</SectionHead>
        <PillContainer>
          <CoursePill type="pill">JEE</CoursePill>
          <CoursePill type="pill">B.Sc IT</CoursePill>
          <CoursePill type="pill">Commerce</CoursePill>
          <CoursePill type="pill">M.Pharma</CoursePill>
          <CoursePill type="pill">Arts</CoursePill>
          <CoursePill type="pill">ME/M.Tech</CoursePill>
        </PillContainer>
      </FooterContainer>
    </>
  );
}

export default Home;
