import React from "react";
import styled from "styled-components";
import Pill from "../Components/Pill";
import StyledButton from "../Components/Button";

const filterData = [
  {
    id: 1,
    title: "State",
    fills: [
      { state: "Maharashtra" },
      { state: "Gujarat" },
      { state: "Rajasthan" },
    ],
  },
  {
    id: 2,
    title: "City",
    fills: [
      { state: "Mumbai" },
      { state: "Pune" },
      { state: "Surat" },
      { state: "Jaipur" },
    ],
  },
  {
    id: 3,
    title: "Stream",
    fills: [{ state: "Arts" }, { state: "Science" }],
  },
  {
    id: 4,
    title: "Exam/Course",
    fills: [{ state: "NEET" }, { state: "12th Maths" }],
  },
];

// STYLED COMPONENT v
const FilterPill = styled(Pill)`
  &:hover {
    border: 1.5px solid ${({ theme }) => theme.colors.dGreen};
    color: white;
    background-color: ${({ theme }) => theme.colors.dGreen};
    transition: background-color 0.5s ease;
  }
`;

const FilterApply = styled(StyledButton)`
  margin-top: 32px;
`;

const Container = styled.div`
  max-height: 800px; /*for transition*/
  margin: 18px 8vw;
  background-color: white;
  padding: 24px;
  border-radius: 20px;
  transition: all 0.8s ease;
  z-index: -10;

  &.close {
    transition: all 0.8s ease, opacity 0.4s ease-in;
    max-height: 0;
    margin: 0 8vw;
    padding: 0 24px;
    pointer-events: none;
    opacity: 0;
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.lParagraph};
    margin-left: 4px;
  }

  .filter {
    h1 {
      margin: 16px 4px;
      font-size: 20px;
      font-weight: 500;
    }
    .radio {
      position: relative;
      cursor: pointer;
      margin-right: 18px;
      padding-left: 32px;
      padding-top: 2px;

      &:hover input ~ .mark {
        background-color: #ccc;
      }
      input {
        position: absolute;
        opacity: 0;
        &:checked ~ .mark {
          border: 8px solid ${(props) => props.theme.colors.dGreen};
        }
      }

      .mark {
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        background-color: #eee;
        border-radius: 50%;
        transition: border 0.4s ease, background-color 0.4s ease;
      }
    }
  }
`;
// STYLED COMPONENT^

function Filter({ data }) {
  return (
    <div className="filter">
      <h1>{data.title}</h1>
      {data.fills.map((fill) => (
        <FilterPill>+ {fill.state}</FilterPill>
      ))}
    </div>
  );
}

function FilterPanel({ open }) {
  return (
    <Container className={open ? undefined : "close"}>
      <h1>Filters</h1>
      {filterData.map((data) => (
        <Filter key={data.id} data={data} />
      ))}
      <div className="filter">
        <h1>Type</h1>
        <label className="radio">
          Professional
          <input
            value="professional"
            type="radio"
            id="professional"
            name="type"
          />
          <span className="mark"></span>
        </label>

        <label className="radio">
          Private
          <input type="radio" value="private" id="private" name="type" />
          <span className="mark"></span>
        </label>
      </div>
      <FilterApply>Apply Filter</FilterApply>
    </Container>
  );
}

export default FilterPanel;
