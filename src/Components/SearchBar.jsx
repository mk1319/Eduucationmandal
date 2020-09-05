import React, { useState } from "react";
import SearchIcon from "../assets/Search.svg";
import FilterButton from "../assets/FilterButton.svg";
import styled from "styled-components";
import {connect} from 'react-redux';
import {fatch_seacrh_data} from '../Reducx/action/FatchData';


const Search = styled.div`
  position: relative;
  width: stretch;
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

function SearchBar({ toggleOpen,fatch_seacrh_data,open }) {
  

  //I remove this props and passes in Course.jsx props open in SeacrhBar compononent.. this is for your reference
  //const [active, setActive] = useState(false); 
  
  const [param, setParam] = useState(); //SEARCH VALUE



  const handleClick = () => {
    // setActive(!active);
    toggleOpen();
  };


  //search bar filter
  const onchangehandle=(e)=>{
    setParam(e)
    fatch_seacrh_data(e)
  }

  
  return (
    <Search>
      <input
        onChange={(e) => onchangehandle(e.target.value)}
        value={param}
        type="text"
        placeholder="Search"
      />
      <img
        className={open ? "active" : undefined}
        onClick={handleClick}
        src={FilterButton}
        alt="filter"
      />
    </Search>
  );
}


export default connect(null,{fatch_seacrh_data})(SearchBar);

