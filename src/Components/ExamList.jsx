import React from "react";
import { PillCard } from "./Styles";
import Pill from "../Components/Pill";
import styled from "styled-components";
import { useState } from "react";

// STYLING
const ExamPill = styled(PillCard)`
  padding: 16px 24px;
  h2 {
    display: inline-block;
  }
  p {
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    margin-left: 16px;
  }
  .details {
    display: flex;
    align-items: center;
    .detail-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 12px;
      margin-top: 10px;
      svg {
        opacity: 0.5;
      }
      h4 {
        word-wrap: break-word;
        font-size: 12px;
        font-weight: 400;
        padding-left: 4px;
        color: ${(props) => props.theme.colors.lParagraph};
      }
    }
  }
`;

const TestPill = styled(Pill)`
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.dGreen};
  border: none;
  color: #fff;
`;

const Month = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 22px !important;
    padding: 0 10px !important;
  }
`;

//

// REACT
const Exam = () => (
  <ExamPill>
    <h2>Maths</h2>
    <p>Trigonometry</p>
    <div className="details">
      <div className="detail-container">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15Z"
              stroke="#5F6C7B"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 6V9.75L11 12"
              stroke="#5F6C7B"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <h4>2hr</h4>
      </div>

      <div className="detail-container">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M13 4H5C3.89543 4 3 4.89543 3 6V13C3 14.1046 3.89543 15 5 15H13C14.1046 15 15 14.1046 15 13V6C15 4.89543 14.1046 4 13 4Z"
              stroke="#5F6C7B"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 8H15"
              stroke="#5F6C7B"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 12H11"
              stroke="#5F6C7B"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>

        <h4>29/08/2020</h4>
      </div>

      <div className="detail-container">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.243 12.4933L10.06 15.6753C9.77875 15.9562 9.3975 16.1139 9 16.1139C8.6025 16.1139 8.22125 15.9562 7.94 15.6753L4.757 12.4933C3.91799 11.6541 3.34665 10.585 3.11522 9.42114C2.88379 8.25729 3.00267 7.05094 3.45682 5.95464C3.91098 4.85834 4.68001 3.92133 5.66669 3.26209C6.65336 2.60284 7.81336 2.25098 9 2.25098C10.1866 2.25098 11.3466 2.60284 12.3333 3.26209C13.32 3.92133 14.089 4.85834 14.5432 5.95464C14.9973 7.05094 15.1162 8.25729 14.8848 9.42114C14.6534 10.585 14.082 11.6541 13.243 12.4933V12.4933Z"
            stroke="#5F6C7B"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
            stroke="#5F6C7B"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h4>Balbharti, Kandivali</h4>
      </div>
    </div>
  </ExamPill>
);

function ExamList({ active }) {
  const [open, setOpen] = useState(active ? true : false);

  return (
    <div className="exam-list">
      <Month onClick={() => setOpen(!open)}>
        <div className="svg">
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="#5F6C7B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9.5L12 15.5L18 9.5"
                stroke="#7D8793"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <h1>August</h1>
        <TestPill as="div">5 {open ? null : `Tests`}</TestPill>
      </Month>
      {open ? (
        <>
          <Exam />
          <Exam />
          <Exam />
        </>
      ) : null}
    </div>
  );
}

export default ExamList;
