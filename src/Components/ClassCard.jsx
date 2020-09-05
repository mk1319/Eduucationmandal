import React, { useState } from "react";
import styled from "styled-components";
import LocationPin from "../assets/LocationPin.svg";
import Verified from "../assets/Verified.png";
import Pill from "./Pill";
import Phone from "../assets/Phone.svg";
import Email from "../assets/Mail.svg";
import { Link } from "react-router-dom";
import { Rating } from "../Components/Styles";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.dHeading};
  border-radius: 20px;
  box-shadow: 0 2px 10px 0px #e9e9e9;
  overflow: hidden;
  max-width: 350px;
  min-width: 310px;
  width: stretch;
  margin-bottom: 32px;
  .class-image {
    height: 200px;
    background-color: #d5d5d5;
    position: relative;

    .location-bar {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 6px 20px;
      border-radius: 10px 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.colors.dGreen};
      img {
        margin-right: 4px;
        opacity: 0.7;
      }
      h3 {
        font-size: 14px;
        font-weight: 400;
        color: white;
      }
    }
  }

  .class-details {
    margin: 16px;
    .title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      h1 {
        margin: 0 10px;
        font-size: 30px;
      }
    }
    .courses {
      margin: 12px 0;
    }
    .contact-details {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      color: ${(props) => props.theme.colors.lParagraph};
      opacity: 0.6;
      .contact {
        margin-right: 12px;
        display: inherit;
        img {
          margin-right: 5px;
        }
      }
    }
  }
`;

const CoursePill = styled(Pill)`
  font-size: 14px;
  padding: 5px 12px;
`;

const Like = styled.div`
  padding: 6px;
  position: absolute;
  cursor: pointer;
  right: 10px;
  top: 10px;
  display: grid;
  place-items: center;
  background-color: white;
  border-radius: 20px;
  transition: all 0.5s ease;

  &.liked {
    transform: rotate(360deg);
  }
`;

const View = styled.button`
  background-color: ${(props) => props.theme.colors.panelsDark};
  color: white;
  font-size: 18px;
  width: 100%;
  padding: 12px 0;
`;

// REACT COMPONENTS
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Like className={liked ? "liked" : null} onClick={() => setLiked(!liked)}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={liked ? "#EE2C2C" : "#5F6C7B"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.0011 16.6217L4.20442 10.8401C3.55299 10.1253 3.2111 9.18158 3.25352 8.21539C3.29595 7.24921 3.71923 6.33913 4.43081 5.68417C5.14238 5.02921 6.08436 4.68266 7.05074 4.7203C8.01713 4.75795 8.92929 5.17673 9.58776 5.88506C9.71093 5.96789 9.85599 6.01213 10.0044 6.01213C10.1529 6.01213 10.2979 5.96789 10.4211 5.88506C11.0796 5.17673 11.9917 4.75795 12.9581 4.7203C13.9245 4.68266 14.8665 5.02921 15.578 5.68417C16.2896 6.33913 16.7129 7.24921 16.7553 8.21539C16.7977 9.18158 16.4559 10.1253 15.8044 10.8401L10.0011 16.6217Z" />
      </svg>
    </Like>
  );
};

function ClassCard(props){


  const Data=props.Data

 

  return (
    <Card>
      <div className="class-image">
        <Rating rate={`${Data.Rate}`} />
        <LikeButton />
        <div className="location-bar">
          <img src={LocationPin} alt="location icon" />
          <h3>{`${Data.City} ,${Data.Town}`}</h3>

        </div>
      </div>

      <div className="class-details">
        <div className="title">
          <h1>{Data.Name}</h1>
          <img src={Verified} alt="verified" />
        </div>
        <div className="courses">
        {
            Data.Course.map((Course,index)=>(
              <CoursePill light key={index}>{Course.Name}</CoursePill>
            ))
          }
        </div>
        <div className="contact-details">
          <div className="contact">
            <img src={Phone} alt="phone" />
            <p>{Data.Contact}</p>
          </div>
          <div className="contact">
            <img src={Email} alt="phone" />
            <p>{Data.Email}</p>
          </div>
        </div>
      </div>
      <Link to={`/class/${Data.Name}/${Data.ClassID}`}>
        <View>View Class</View>
      </Link>
    </Card>
  );
}

export default ClassCard;
