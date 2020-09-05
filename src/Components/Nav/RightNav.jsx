import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";

const UL = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  a,
  button {
    margin-left: 48px;
    font-size: 18px;
    color: #889099;
    &.active {
      color: ${(props) => props.theme.colors.lHeading};
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 90vh;
    background-color: #101317;
    z-index: 50;
    transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(-100%)")};
    transition: all 0.5s ease;

    a {
      font-size: 24px;
      padding: 24px;
      color: ${(props) => props.theme.colors.dParagraph};
      transition: all 0.5s ease;
      &:hover,
      &.active {
        color: ${(props) => props.theme.colors.dHeading};
      }
    }
  }
`;

function RightNav({ open }) {
  return (
    <UL open={open}>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/class">
        Course
      </NavLink>
      <NavLink to="/blogs">Blog</NavLink>
      <LoginButton />
    </UL>
  );
}

export default RightNav;
