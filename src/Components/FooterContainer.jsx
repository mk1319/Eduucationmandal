import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 32px 8vw;
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.colors.panelsDark};
  text-align: center;
  position: relative;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dParagraph};
  font-size: 18px;
  width: auto;
  font-weight: 300;
  margin-bottom: 20px;

  &:hover {
    color: white;
  }
`;

const Footer = styled.footer`
  background-color: rgba(225, 225, 225, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(252, 252, 252, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 18px 0;
  height: 60px;
  & span {
    /* padding: 12px; */
    color: ${({ theme }) => theme.colors.like};
  }
`;

function FooterContainer({ children }) {
  return (
    <Container>
      {children}
      <LinkContainer>
        <FooterLink as={Link} to="/about-us">
          About Us
        </FooterLink>
        <FooterLink as={Link} to="/terms-and-condition">
          Terms & Condition
        </FooterLink>
        <FooterLink as={Link} to="/privacy-policy">
          Privacy Policy
        </FooterLink>
        <FooterLink as={Link} to="/contact">
          Contact Us
        </FooterLink>
      </LinkContainer>
      <Footer>
        CREATED WITH &nbsp; <span>❤</span>
      </Footer>
    </Container>
  );
}

export default FooterContainer;
