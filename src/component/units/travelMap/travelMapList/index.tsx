import React from "react";
import styled from "@emotion/styled";
//components
import TravelMapListItem from "./travelMapListItem";
import { dummyData } from "@/dummyData/travelMap";

const index = () => {
  return (
    <Container>
      <TopContainer>
        {dummyData.map((item) => {
          return <TravelMapListItem item={item} />;
        })}
      </TopContainer>
      <BottomContainer>글 작성하기</BottomContainer>
    </Container>
  );
};

export default index;

const Container = styled.div`
  width: 43.8rem;
  height: 100vh;
  background-color: #a9a4a4;
  display: flex;
  flex-direction: column;
  padding: 3.1rem 3.1rem 3.6rem 3.6rem;
`;
const TopContainer = styled.div`
  flex: 1;
`;
const BottomContainer = styled.div`
  height: 5.6rem;
  background-color: gray;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
