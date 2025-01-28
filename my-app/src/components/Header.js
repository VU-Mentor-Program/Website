import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const Header = () => {
  return <HeaderContainer>Mentor Program</HeaderContainer>;
};

export default Header;
