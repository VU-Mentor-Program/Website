import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  font-size: 2rem;
  font-weight: bold;
`;

const Message = styled.p`
  font-size: 1.25rem;
`;

const StatusMessage = ({ title, message }) => {
  return (
    <PageContainer>
      <Header />
      <Title>{title}</Title>
      <Message>{message}</Message>
      <Footer />
    </PageContainer>
  );
};

export default StatusMessage;
