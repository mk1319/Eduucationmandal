import React from "react";
import logo from "../../assets/Logo.svg";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Hamburger from "./Hamburger";

const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 78px;
  padding: 0 8vw;
  position: relative;
  background-color: ${({ white }) => (white ? "#fff" : "#9aebc6")};
  background-color: ${({ clear }) => clear && "transparent"};
  .logo {
    width: 48px;
  }
`;

function Header({ white }) {
  return (
    <Nav white={white}>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <Hamburger />
    </Nav>
  );
}

export default withRouter(Header);
