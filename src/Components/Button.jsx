import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  padding: 12px 24px;
  color: ${({ theme }) => theme.colors.dHeading};
  background-color: ${({ theme }) => theme.colors.panelsDark};
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledButton;
