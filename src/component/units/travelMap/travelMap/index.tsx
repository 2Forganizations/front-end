import React from "react";
import styled from "@emotion/styled";

const index = () => {
  return (
    <Container>
      <TopContainer>hi</TopContainer>
      <BottomContainer></BottomContainer>
    </Container>
  );
};

export default index;

const Container = styled.div`
  width: 438/ (rootFontSize * 10);
  height: 100%;
`;
const TopContainer = styled.div`
  width: 100%;
`;
const BottomContainer = styled.div`
  height: 56/ (rootFontSize * 10);
`;
