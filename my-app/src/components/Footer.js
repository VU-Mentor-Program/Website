import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 12px;
  color: white;
`;


const Footer = () => {
  return (
    <FooterContainer>
      © 2025
    </FooterContainer>
  );
};

export default Footer;
