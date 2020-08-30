import React from "react";
import styled from "styled-components";
import { SectionHead } from "./Styles";
import StarRating from "./StarRating";

const ReviewContainer = styled.div`
  text-align: center;
  margin: 24px 0;
`;

const ReviewList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  position: relative;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  &::after {
    content: "";
    position: sticky;
    right: -1px;
    top: 0;
    bottom: 0;
    padding: 0 35px;
    width: 20px;
    background-image: linear-gradient(
      to right,
      rgba(16, 19, 23, 0),
      rgba(16, 19, 23, 0.3)
    );
  }
`;

const Review = styled.div`
  flex: 0 2 auto;
  background-color: ${(props) => props.theme.colors.dGreen};
  min-width: 350px;
  max-width: 400px;
  border-radius: 20px;
  padding: 16px;
  margin: 20px 20px 20px 0;
  h2,
  p {
    color: ${(props) => props.theme.colors.dHeading};
    font-weight: 400;
  }
  h2 {
    font-size: 18px;
    text-align: left;
  }
  p {
    font-size: 16px;
    font-style: italic;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
  }
`;
const ReviewCard = () => (
  <Review>
    <h2>Had a very wonderful experience learning with Allen. Thank you.</h2>
    <div className="bottom">
      <StarRating rate={4} />
      <p>~Anonymous</p>
    </div>
  </Review>
);

const Reviews = () => {
  return (
    <ReviewContainer>
      <SectionHead light>Reviews</SectionHead>
      <ReviewList>
        <ReviewCard />
        <ReviewCard />
      </ReviewList>
    </ReviewContainer>
  );
};

export default Reviews;
