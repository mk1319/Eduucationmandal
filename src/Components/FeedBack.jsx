import React, { useState } from "react";
import StarRating from "./StarRating";
import styled from "styled-components";
import StyledButton from "./Button";

const StyledInput = styled.textarea`
  background: ${(props) => (props.dark ? "#3B3F43" : "#FFFFFF")};
  border-radius: 10px;
  padding: 16px;
  min-height: 96px;
  max-height: 96px;
  border: none;
  margin: 16px 0;
  width: stretch;
  max-width: 450px;
  font-size: 16px;
  color: ${(props) => props.dark && "rgba(255, 255, 255, 0.5)"};
`;

const StyledDiv = styled.div`
  text-align: left;
  margin: 32px 0;
`;

const Button = styled(StyledButton)`
  width: 120px;
  color: ${(props) => props.dark && "#101317"};
  background-color: ${(props) => props.dark && "#FFFFFF"};
`;

function FeedBack({ dark }) {
  const [Rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <StyledDiv>
      <StarRating size="30" ratingFunction={setRating} />
      <form>
        <StyledInput
          dark={dark}
          placeholder="Your feedback (Optional)"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button as="button" dark={dark} type="submit">
          Submit
        </Button>
      </form>
    </StyledDiv>
  );
}

export default FeedBack;
