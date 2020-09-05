import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StyledLabel = styled.label`
  input[type="radio"] {
    display: none;
  }
  .star {
    cursor: pointer;
    width: ${(props) => (props ? props.size + "px" : "18px")};
    height: ${(props) => (props ? props.size + "px" : "18px")};
    margin: 4px;
    transition: all 0.5s ease;
  }
`;

// MASTER COMPONENT
const StarRating = ({ rate, size, ratingFunction }) => {
  const [rating, setRating] = useState(rate || null);
  const [hover, setHover] = useState(null);

  const handleClick = (rating) => {
    setRating(rating);
    ratingFunction(rating);
  };

  return (
    <div style={rate && { pointerEvents: "none" }}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <StyledLabel size={size}>
            <input
              type="radio"
              name="rating"
              onClick={() => handleClick(ratingValue)}
              value={ratingValue}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#FFEA29" : "#DDD6D6"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </StyledLabel>
        );
      })}
    </div>
  );
};

export default StarRating;
