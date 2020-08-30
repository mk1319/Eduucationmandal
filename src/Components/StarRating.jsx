import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StyledLabel = styled.label`
  input[type="radio"] {
    display: none;
  }
  .star {
    cursor: pointer;
    width: 18px;
    height: 18px;
    margin: 4px;
    transition: all 0.5s ease;
  }
`;

// MASTER COMPONENT
const StarRating = ({ rate }) => {
  const [rating, setRating] = useState(rate || null);
  const [hover, setHover] = useState(null);

  return (
    <div style={rate && { pointerEvents: "none" }}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <StyledLabel>
            <input
              type="radio"
              name="rating"
              onClick={() => setRating(ratingValue)}
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
