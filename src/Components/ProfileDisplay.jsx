import React from "react";
import { SectionHead } from "../Components/Styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .profile {
    padding: 24px;
    text-align: center;
    &:active,
    &:hover {
      .name {
        color: #009699;
      }
    }
    .img {
      width: 100px;
      height: 100px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 50%;
    }

    .name {
      color: ${({ light }) => (light ? "#FCFCFC" : "#878787")};
      font-weight: 500;
      padding-top: 12px;
      width: 90px;
      margin: auto;
      transition: color 0.2s ease;
    }
  }
`;

const Profile = ({ profile, type }) => {
  const slicedname = profile.name.replace(/\s/g, "");

  return (
    <Link to={`/${type}/${slicedname}/${profile.id}`}>
      <div className="profile">
        <div
          className="img"
          style={{ backgroundImage: `url(${profile.imgUrl})` }}
        />

        <h3 className="name">{profile.name}</h3>
      </div>
    </Link>
  );
};

function ProfileDisplay({ title, profiles, type, light }) {
  return (
    <Container light={light}>
      <SectionHead light={light}>{title}</SectionHead>
      <div className="flex">
        {profiles.map((profile) => (
          <Profile key={profile.id} type={type} profile={profile} />
        ))}
      </div>
    </Container>
  );
}

export default ProfileDisplay;
