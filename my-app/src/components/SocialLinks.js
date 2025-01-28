import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 24px;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`;

const SocialLinks = () => {
  return (
    <SocialContainer>
      <SocialIcon href="https://github.com/VU-Mentor-Program">
        <FaGithub />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/bscmentorsprogram?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <FaInstagram />
      </SocialIcon>
      <SocialIcon href="https://chat.whatsapp.com/EJrnbX25fO2B8nFecKRRTl">
        <FaWhatsapp />
      </SocialIcon>
    </SocialContainer>
  );
};

export default SocialLinks;
