import React, { useState } from "react";
import SearchIcon from "../assets/Search.svg";
import FilterButton from "../assets/FilterButton.svg";
import styled from "styled-components";

const Search = styled.div`
  position: relative;
  width: -webkit-fill-available;
  margin-top: 24px;
  display: grid;
  place-items: center;

  input {
    background: url(${SearchIcon}) no-repeat scroll 20px center;
    background-color: ${(props) => props.theme.colors.dHeading};
    height: 42px;
    padding-top: 5px;
    padding-left: 42px;
    border-radius: 20px;
    width: 100%;
  }

  img {
    position: absolute;
    right: 16px;
    cursor: pointer;
    transition: transform 0.4s ease;

    &.active {
      transform: scaleY(-1);
      transition: transform 0.4s ease;
    }
  }
`;

function SearchBar({ toggleOpen }) {
  const [active, setActive] = useState(false);
  const [param, setParam] = useState();

  const handleClick = () => {
    setActive(!active);
    toggleOpen();
  };

  return (
    <Search>
      <input
        onChange={(e) => setParam(e.target.value)}
        value={param}
        type="text"
        placeholder="Search"
      />
      <img
        className={active ? "active" : undefined}
        onClick={handleClick}
        src={FilterButton}
        alt="filter"
      />
    </Search>
  );
}

export default SearchBar;
