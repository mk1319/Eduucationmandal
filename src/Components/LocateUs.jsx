import React from "react";
import styled from "styled-components";
import { SectionHead } from "./Styles";
import Map from "../assets/Map.png";
import { Link } from "react-router-dom";

const MapContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin: 24px 0;
  img {
    object-fit: cover;
    width: 100%
    height: 100%
  }
`;

const OtherBranches = styled.div`
  text-align: left;
  .links {
    display: flex;
    a {
      margin: 12px 32px 12px 0;
      padding: 4px 0;
      font-size: 18px;
      color: ${(props) => props.theme.colors.dParagraph};
      border-bottom: 1px solid white;
    }
  }
`;

function LocateUs() {
  return (
    <>
      <SectionHead light>Locate Us</SectionHead>
      <MapContainer>
        <img src={Map} alt="Map" />
      </MapContainer>
      <OtherBranches>
        <SectionHead light>Visit our other Branches</SectionHead>
        <div className="links">
          <Link to="">Kandivali</Link>
          <Link to="">Andheri</Link>
        </div>
      </OtherBranches>
    </>
  );
}

export default LocateUs;
