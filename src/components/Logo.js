import React from "react";
import styled from "styled-components";
import logo from "../img/mp_logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const Logo = styled.img`
  width: 12rem;
  height: 12rem;
  margin-bottom: 1.25rem;
  border-radius: 50%;
`;

const LogoComponent = () => {
  return (
    <LogoWrapper>
      <Logo src={logo} alt="Mentor Program Logo" />
    </LogoWrapper>
  );
};

export default LogoComponent;
