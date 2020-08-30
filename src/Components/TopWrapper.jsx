import styled from "styled-components";

const TopWrapper = styled.div`
  padding: 32px 8vw;
  background-color: #9aebc6;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow-x: hidden;

  & h1 {
    font-family: "Domine", serif;
    font-size: 3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lHeading};
    z-index: 2;
  }

  & h4 {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.lParagraph};
  }
`;

export default TopWrapper;
