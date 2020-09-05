import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const SectionHead = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ light, theme }) =>
    light ? theme.colors.dHeading : theme.colors.lHeading};
`;

const StyledRating = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;

  h3 {
    font-size: 16px;
  }
  .star {
    margin-right: 5px;
  }
`;

const PillCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 24px;
  margin-top: 15px;
  max-width: 450px;
  min-width: 260px;
  h2 {
    color: ${(props) => props.theme.colors.dGreen};
    font-size: 20px;
    font-weight: 600;
  }
`;

const Rating = ({ rate }) => (
  <StyledRating className="rating">
    <FaStar fill="#FFEA29" className="star" />
    <h3>{rate}</h3>
  </StyledRating>
);

export { SectionHead, PillCard, Rating };
