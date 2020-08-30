import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  text-align: center;
  border-radius: 10px;
  flex: 1;
  padding: 20px;
  margin: 10px;
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 2px 10px 0px #e9e9e9;
  max-width: 320px;
  & .title {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 600;
  }
`;

function ServiceCards({ children }) {
  return <Card>{children}</Card>;
}

export default ServiceCards;
