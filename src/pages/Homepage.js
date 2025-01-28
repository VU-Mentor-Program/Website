import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import Logo from "../components/Logo";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1d2a;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const Homepage = () => {
  return (
    <PageContainer>
      <Header />
      <Logo />
      <Title>Mentor Program</Title>
      <Subtitle>Aiming to bring first-year students together 😊</Subtitle>
      <SocialLinks />
      <Footer />
    </PageContainer>
  );
};

export default Homepage;
