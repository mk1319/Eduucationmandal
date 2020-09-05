import React,{useEffect,useState} from "react";
import styled from "styled-components";
import Pill from "../Components/Pill";
import StyledButton from "../Components/Button";

import {connect} from 'react-redux';
import {fatch_panel_data} from '../Reducx/action/FatchData';
import {Filter_Handle} from '../Reducx/action/FatchData';


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



function FilterPanel({ open ,toggleOpen,fatch_panel_data,PanelCourse,PanelCity,PanelState,PanelStream,Filter_Handle}) {

      const [Filter, setFilter] = useState({
          Course:[],
          State:[],
          City:[],
          Stream:[],
          Type:""
      });


      console.log(Filter)
  
    const Handleset=(value,statename)=>{

      let array=Filter;

      switch(statename)
      {    
        case'Course':
        
          if(Filter.Course.includes(value))
          {
            array.Course.splice(array.Course.indexOf(value),1);
            setFilter(array);
           console.log(value)
          }
          else
          {
            array.Course.push(value);
            setFilter(array);
            
          }
        break;
        case'City':
        
          if(Filter.City.includes(value))
          {
            array.City.splice(array.City.indexOf(value),1);
            setFilter(array);
         
          }
          else
          { 
            array.City.push(value);
            setFilter(array);
          }
        
        
        break;

        case'State':
          
          if(Filter.State.includes(value))
          {
            array.State.splice(array.State.indexOf(value),1);
            setFilter(array);
         
          }
          else
          {
            array.State.push(value);
            setFilter(array);
          }
        
        break;

        case 'Stream':
          
          if(Filter.Stream.includes(value))
          {
            array.Stream.splice(array.Stream.indexOf(value),1);
            setFilter(array);
          }
          else
          {
            array.Stream.push(value);
            setFilter(array);
          }
        
        break;
        case 'Type':
          array.Type=value
          setFilter(array);
        break;
        default:
          break;
        }
      return null
    }
    
      function FilterCourse({data}) {
        return (
          <div className="filter">
            <h1>Course</h1>
            {data.map((data)=>
              <FilterPill 
                key={data.Name}
                value={data.Name}
                onClick={(e)=>Handleset(data.Name,'Course')}
            >+{data.Name}</FilterPill>
            )}
          </div>
        );
      }

      function FilterState({data}) {
        return (
          <div className="filter">
            <h1>State</h1>
            {data.map((data) => (
              <FilterPill 
                key={data.State} 
                onClick={()=>Handleset(data.State,'State')} 
              
              >+ {data.State}</FilterPill>

            ))}
          </div>
        );
      }
      
      function FilterCity({ data}) {  
        return (
          <div className="filter">
            <h1>City</h1>
            {data.map((data)=>
            <FilterPill key={data.City} 
                        onClick={()=>Handleset(data.City,'City')} 
            >+{data.City}</FilterPill>

            )}
          </div>
        );
      }
      
      function FilterStrem({ data}) {
        return (
          <div className="filter">
            <h1>Stream</h1>
            {data.map((data)=>
            <FilterPill key={data.Name} 
                        onClick={()=>Handleset(data.Name,'Stream')}
            >       
              +{data.Name}
            </FilterPill>
            )}
          </div>
        );
      }
      

    //Apply Filter
      
    function applyfilter()
    { 
      toggleOpen()
      Filter_Handle(Filter)
    }
    

    useEffect(() => {
     
      fatch_panel_data()

      return () => {
      };
    }, [])

    



  return (
    <Container className={open ? undefined : "close"}>
      <h1>Filters</h1>

        <FilterCourse data={PanelCourse}/>
        <FilterCity data={PanelCity}/>
        <FilterState data={PanelState}/>
        <FilterStrem data={PanelStream}/>



      <div className="filter">
        <h1>Type</h1>
        <label className="radio">
          Professional
          <input
            value="professional"
            type="radio"
            id="professional"
            name="type"
            onClick={()=>{
              Handleset("Professional","Type")
            }}
          />
          <span className="mark"></span>
        </label>

        <label className="radio">
          Private
          <input 
            type="radio" 
            value="private" 
            id="private" 
            name="type"
            onClick={()=>{
              Handleset("Private","Type")
            }}  
          />
              
          <span className="mark"></span>
        </label>
      </div>
      <FilterApply onClick={()=>applyfilter()}>Apply Filter</FilterApply>
    </Container>
  );
}


const maptoprops=state=>({
  PanelCourse:state.Filter.PanelCourse,
  PanelStream:state.Filter.PanelStream,
  PanelCity:state.Filter.PanelCity,
  PanelState:state.Filter.PanelState
})


// (STATE,DISPATCH)
export default connect(maptoprops,{fatch_panel_data,Filter_Handle})(FilterPanel);
