import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <FooterContainer />
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  min-height: 10vh;
  background-image: linear-gradient(#560bad, black);
`;
