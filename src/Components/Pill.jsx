import styled from "styled-components";

const Pill = styled.button`
  padding: 5px 16px;
  margin: 5px 10px;
  margin-left: 0;
  width: auto;
  color: ${({ theme }) => theme.colors.dGreen};
  border: solid ${({ theme }) => theme.colors.dGreen};
  border-width: ${(props) => (props.light ? 0 : "1.5px")};
  background-color: ${({ light }) =>
    light ? "rgba(131, 232, 186, 0.5)" : "transparent"};
  border-radius: 40px;
`;

export default Pill;
