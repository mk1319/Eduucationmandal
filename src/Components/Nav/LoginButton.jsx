import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "../Button";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = styled(StyledButton)`
  padding: 10px 26px;
  background-color: #2c537d;
  color: #fcfcfc !important;
  font-weight: 400;
  position: relative;
  font-size: 16px !important;
  h1 {
    font-weight: 400;
  }
  .icon {
    margin-left: 8px;
    transform: ${({ open }) => (open ? "rotateX(180deg)" : "rotateX(0deg)")};
    transition: transform 0.5s ease;
  }
  @media (max-width: 768px) {
    background: transparent;
    color: ${(props) => props.theme.colors.dParagraph} !important;
    h1 {
      font-size: 24px;
    }
  }
`;

const Dropdown = styled.div`
  border-radius: 10px;
  background-color: #2c537d;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 120%;
  right: 0;
  opacity: ${({ open }) => (open ? "1" : "0")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transition: opacity 0.5s ease;
  a {
    padding: 16px;
    font-weight: 400;
    color: #fcfcfc !important;
    opacity: 0.7;
    transition: opacity 0.5s ease;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    left: 0;
    background: transparent;
    align-items: flex-start;
    a {
      margin-left: 10px !important;
      padding: 8px 32px !important;
    }
  }
`;

function LoginButton() {
  const [open, setOpen] = useState(false);

  return (
    <Login as="button" open={open} onClick={() => setOpen(!open)}>
      <h1>Login</h1>
      <FiChevronDown strokeWidth="3" className="icon" />
      <Dropdown open={open}>
        <Link>Class</Link>
        <Link>Student</Link>
      </Dropdown>
    </Login>
  );
}

export default LoginButton;
