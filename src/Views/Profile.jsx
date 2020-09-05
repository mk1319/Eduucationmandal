import React from "react";
import styled from "styled-components";
import TopWrapper from "../Components/TopWrapper";
import Pill from "../Components/Pill";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Rating, PillCard } from "../Components/Styles";
import Reviews from "../Components/Reviews";
import FeedBack from "../Components/FeedBack";
import Header from "../Components/Nav/Header";

const Wrapper = styled(TopWrapper)`
  height: auto;
  background-color: white;
  flex-direction: row;
  padding: 64px 6vw;
  padding-bottom: 32px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.2);
  justify-content: flex-start;
  .image {
    position: relative;
    min-width: 130px;
    height: 130px;
    margin-right: 24px;
    border-radius: 50%;
    background-image: url("https://randomuser.me/api/portraits/women/42.jpg");
    .rating {
      position: absolute;
      bottom: -10%;
      left: 50%;
      top: auto;
      transform: translateX(-50%);
    }
  }
  h1 {
    font-size: 2.5rem;
  }
  .details-container {
    margin-top: 16px;
    .contact-dets {
      margin-bottom: 5px;
      color: #707070;
      opacity: 0.8;
      display: flex;
      align-items: center;
      p {
        margin-left: 8px;
      }
    }
  }
`;

const StyledPill = styled(Pill)`
  background-color: ${(props) => props.theme.colors.dGreen};
  color: white;
  font-size: 12px;
  font-weight: 600;
`;

const About = styled.div`
  padding: 24px 8vw;
  ${PillCard} {
    padding: 24px;
    h2 {
      font-size: 16px;
    }
    p {
      color: ${(props) => props.theme.colors.lHeading};
      margin-top: 6px;
      font-size: 14px;
      opacity: 0.7;
      font-weight: 400;
    }
  }
`;

const ProfileReviews = styled(Reviews)``;

const Container = styled.div`
  padding: 0 8vw;
`;

function Profile({ match }) {
  // const [name, id] = match.params;
  const teacher = match.url.includes("/Teacher");

  return (
    <>
      <Header white />
      <Wrapper>
        <div className="image">
          <Rating rate={4.5} />
        </div>
        <div className="details">
          <h1>Jane Doe</h1>
          <div className="pill-container">
            <StyledPill>Maths</StyledPill>
            <StyledPill>Science</StyledPill>
          </div>

          {/* ONLY RENDER FOR TEACHERS */}
          {teacher && (
            <div className="details-container">
              <div className="contact-dets">
                <FiPhone className="icon" />
                <p>8324976510</p>
              </div>
              <div className="contact-dets">
                <HiOutlineMail className="icon" />
                <p>mahestuts@google.com</p>
              </div>
            </div>
          )}
        </div>
      </Wrapper>

      {/* BIOGRAPHY QUALIFICATION EXPERIENCE */}
      <About>
        <PillCard>
          <h2>BIOGRAPHY</h2>
          <p>
            Albert Einstein was born on March 14, 1879 in Ulm, Germany, but he
            grew up and obtained his early education in Munich,{" "}
          </p>
        </PillCard>
        <PillCard>
          <h2>QUALIFICATION</h2>
          <p>
            Albert Einstein was born on March 14, 1879 in Ulm, Germany, but he
            grew up and obtained his early education in Munich,{" "}
          </p>
        </PillCard>
        <PillCard>
          <h2>EXPERIENCE</h2>
          <p>
            Albert Einstein was born on March 14, 1879 in Ulm, Germany, but he
            grew up and obtained his early education in Munich,{" "}
          </p>
        </PillCard>
      </About>
      <Container>
        <ProfileReviews />
      </Container>
      <Container>
        <FeedBack />
      </Container>
    </>
  );
}

export default Profile;
