import React from "react";
import { PillCard } from "./Styles";
import styled from "styled-components";

// STYLING
const CoursePill = styled(PillCard)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name p {
    font-size: 12px;
    margin-top: 4px;
  }
  .price h2 {
    font-weight: 400;
    color: ${(props) => props.theme.colors.lHeading};
  }
`;
//

// REACT
const Course = ({ course }) => (
  <CoursePill>
    <div className="name">
      <h2>{course.subject}</h2>
      <p>Prof. {course.professor}</p>
    </div>
    <div className="price">
      <h2>₹{course.price}.00</h2>
    </div>
  </CoursePill>
);

function CourseList({ data }) {
  return (
    <>
      <h1>{data.stream}</h1>
      {data.courses.map((course) => (
        <Course key={course.courseId} course={course} />
      ))}
    </>
  );
}

export default CourseList;
