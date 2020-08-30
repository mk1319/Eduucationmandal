import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 24px;
  color: ${({ theme }) => theme.colors.dHeading};
  background-color: ${({ theme }) => theme.colors.panelsDark};
  border-radius: 20px;
  font-size: 16px;
  width: -webkit-fill-available;
  text-align: center;
  transition: background-color 0.5s ease;
`;

export default StyledButton;
