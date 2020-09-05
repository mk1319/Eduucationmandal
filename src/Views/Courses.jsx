import React, { useState,useEffect } from "react";
import TopWrapper from "../Components/TopWrapper";
import Browse from "../assets/Browse.svg";
import styled from "styled-components";
import SearchBar from "../Components/SearchBar";
import FilterPanel from "../Components/FilterPanel";
import ClassCard from "../Components/ClassCard";
import TabGroup from "../Components/TabGroup";
import {connect} from 'react-redux'
import {fatch_filter_data} from '../Reducx/action/FatchData'



//STYLING
const Wrapper = styled(TopWrapper)`
  height: 276px;
  h1 {
    font-size: 2rem;
  }
`;

const BrowseContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  position: relative;
  img {
    position: absolute;
    right: 0;
    margin-left: -12px;
    z-index: 0;
  }
`;

const Sort = styled.div`
  padding: 20px 8vw;
  display: flex;
  h2 {
    opacity: 0.6;
    margin-right: 18px;
    font-size: 18px;
    color: #707070;
    font-weight: 400;
  }
  .tabs {
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
    h2 {
      opacity: 1;
      transition: color 1.5s ease;
      &.sort-active {
        transition: color 1.5s ease;
        font-weight: 600;
        color: ${(props) => props.theme.colors.lHeading};
      }
    }
  }
`;

const ClassList = styled.div`
  padding: 32px 8vw;
  padding-top: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// REACT
function Courses(props) {

  const dattt=[];

  useEffect(() => {

    props.fatch_filter_data()
    
    return () => {};

  },[])


  const ClassCardData=props.Data.map((Data)=>(
      <ClassCard Data={Data} key={Data.ClassID} />
  ))



 

  const [open, setOpen] = useState(false);




  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Wrapper>
        <BrowseContainer>
          <h1>Browse your Class/Course</h1>
          <img src={Browse} alt="Browse" />
        </BrowseContainer>
        <SearchBar toggleOpen={toggleOpen} />
      </Wrapper>
      <FilterPanel open={open} toggleOpen={toggleOpen} />
      <Sort>
        <h2>Sort By: </h2>
        <TabGroup
          tabnames={[{ text: "Popularity" }, { text: "Rating" }]}
          activeClass="sort-active"
        />
      </Sort>
        <ClassList>
        {ClassCardData}
        </ClassList>
    </>
  );
}


const maptoprops=state=>({
  Data:state.Filter.Data

})




export default connect(maptoprops,{fatch_filter_data})(Courses);
