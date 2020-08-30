import styled from "styled-components";

const SectionHead = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ light, theme }) =>
    light ? theme.colors.dHeading : theme.colors.lHeading};
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

export { SectionHead, PillCard };
