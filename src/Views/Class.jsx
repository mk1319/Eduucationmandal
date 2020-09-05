import React from "react";
import styled from "styled-components";
import { useState } from "react";
import TopWrapper from "../Components/TopWrapper";
import classImage from "../assets/classphoto.png";
import Top from "../assets/TopQuotes.svg";
import Bottom from "../assets/BottomQuotes.svg";
import TabGroup from "../Components/TabGroup";
import CourseList from "../Components/CourseList";
import ExamList from "../Components/ExamList";
import ProfileDisplay from "../Components/ProfileDisplay";
import Profiles from "../Profiles.json";
import FooterContainer from "../Components/FooterContainer";
import Reviews from "../Components/Reviews";
import LocateUs from "../Components/LocateUs";
import FeedBack from "../Components/FeedBack";
import Header from "../Components/Nav/Header";

// STYLING
const Wrapper = styled(TopWrapper)`
  background-color: #ffffff;
  height: auto;
  padding-bottom: 0;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.2);
  h1 {
    font-size: 2rem;
    align-self: flex-start;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
    opacity: 0.8;
    color: ${(props) => props.theme.colors.lParagraph};
  }
  .class-photo {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    max-width: 570px;
    background-size: cover;
    border-radius: 10px;
    overflow: hidden;
    margin: 15px 0;
  }
  .quote {
    background-color: #efefef;
    border-radius: 10px;
    text-align: center;
    padding: 20px 40px;
    p {
      position: relative;
      font-size: 12px;
      font-style: italic;
      font-weight: 500;
      color: ${(props) => props.theme.colors.lParagraph};
      &::before,
      &::after {
        content: "";
        position: absolute;
        background-repeat: no-repeat;
        background-position: center;
        width: 26px;
        height: 26px;
      }
      &::before {
        background-image: url(${Top});
        top: -10px;
        left: -20px;
      }
      &::after {
        background-image: url(${Bottom});
        right: -20px;
        bottom: -10px;
      }
    }
  }
  .tabs {
    display: flex;
    justify-content: center;
    h2 {
      cursor: pointer;
      color: ${(props) => props.theme.colors.lParagraph};
      font-size: 20px;
      font-weight: 600;
      margin: 0 42px;
      padding: 24px 0;
      position: relative;
      transition: color 0.3s ease;
      &::after {
        content: "";
        display: block;
        width: 100%;
        opacity: 0;
        height: 4px;
        border-radius: 2px 2px 0 0;
        background-color: ${(props) => props.theme.colors.dGreen};
        position: absolute;
        bottom: 0;
        transition: all 0.5s ease;
      }
    }
    h2:first-child::after {
      transform: translateX(100%);
      transform-origin: right;
      right: 0;
    }
    h2:last-child::after {
      transform: translateX(-100%);
      transform-origin: left;
    }
    h2.tab-active {
      color: ${(props) => props.theme.colors.dGreen};
      &::after {
        transition: all 0.7s 0.2s ease;
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;

const TabContainer = styled.div`
  padding: 24px 8vw;
  .exam-list {
    padding-top: 10px;
  }
  h1 {
    padding-top: 20px;
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.lParagraph};
  }
`;
//

// DUMMY DATA
const dummydata = [
  {
    id: "11",
    stream: "Science",
    courses: [
      {
        courseId: "11a",
        subject: "Physics",
        professor: "Ajay Kulkarni",
        price: "20,000",
      },
      {
        courseId: "11b",
        subject: "Maths",
        professor: "Manish Paul",
        price: "24,000",
      },
    ],
  },
  {
    id: "12",
    stream: "Commerce",
    courses: [
      {
        courseId: "12a",
        subject: "Economics",
        professor: "Vikrant J.",
        price: "16,000",
      },
      {
        courseId: "12b",
        subject: "Accounts",
        professor: "Ganesh Gaitonde",
        price: "21,000",
      },
    ],
  },
];
//

// REACT
function Class({ match }) {
  const [tab, setTab] = useState(0);

  const toggleTab = () => {
    setTab(!tab);
  };

  return (
    <>
      <Header white />
      {/* TOP WRAPPER */}
      <Wrapper>
        <h1>{match.params.classname}</h1>
        <h3 className="vision">
          But I must explain to you how all this mistaken idea of denouncing
        </h3>
        <div
          className="class-photo"
          style={{ backgroundImage: `url(${classImage})` }}
        />
        <div className="quote">
          <p>
            Don't be pushed around by the fears in your mind. Be led by the
            dreams in your heart.
          </p>
        </div>
        <TabGroup
          tabnames={[{ text: "Courses" }, { text: "Exams" }]}
          activeClass="tab-active"
          onChange={toggleTab}
        />
      </Wrapper>
      {/* ///// */}

      {/* TABS */}
      <TabContainer>
        {tab ? (
          <>
            <ExamList active />
            <ExamList />
            <ExamList />
          </>
        ) : (
          <>
            {dummydata.map((data) => (
              <CourseList key={data.id} data={data} />
            ))}
          </>
        )}
      </TabContainer>
      {/* ///// */}

      {/* TEACHERS */}
      <TabContainer>
        <ProfileDisplay
          title={"Our Faculty"}
          type="Teacher"
          profiles={Profiles}
        />
      </TabContainer>
      {/* ///// */}

      {/* FOOTER */}
      <FooterContainer>
        <ProfileDisplay
          title={"Our Students"}
          type="Student"
          profiles={Profiles}
          light
        />
        <Reviews light />
        <FeedBack dark />
        <LocateUs />
      </FooterContainer>
      {/* ///// */}
    </>
  );
}

export default Class;
