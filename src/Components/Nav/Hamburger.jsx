import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  z-index: 99;
  transition: transform 0.5s ease;
  transform: ${(props) => (props.open ? "rotate(360deg)" : "rotate(0)")};
  div {
    min-height: 2px;
    width: 20px;
    background-color: ${({ open, theme }) =>
      open ? theme.colors.dHeading : theme.colors.lHeading};
    transform-origin: 1.5px;
    border-radius: 20px;
    transition: all 0.5s ease;

    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
}

export default Hamburger;
