import React from "react";
import Hamburger from "../assets/Hamburger.png";
import logo from "../assets/Logo.svg";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 78px;
  padding: 0 32px;

  & .logo {
    width: 48px;
  }
`;

function Header() {
  return (
    <HeaderComponent>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <img src={Hamburger} alt="menu" />
    </HeaderComponent>
  );
}

export default withRouter(Header);
