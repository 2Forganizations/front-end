import React, { FC, useEffect, useCallback } from "react";
import styled from "@emotion/styled";

// api
import TravelMapApi from "@/api/travelMapApi";

interface Props {
  selectTravelMapId: number;
  onClick: () => void;
}
const TravelMapDetail: FC<Props> = ({ selectTravelMapId, onClick }) => {
  useEffect(() => {
    TravelMapApi.getPlanIdDetail(selectTravelMapId);
  }, [selectTravelMapId]);

  return (
    <Container>
      <TopContainer>
        <button onClick={onClick}>x</button>
      </TopContainer>
      <ImgWrapper>img</ImgWrapper>
      <ContentWrapper>
        <Title>
          <h2>제목</h2>
          <img src="/assets/travelMap/address/addressPin/select_addressPin.png" />
          <span>주소</span>
        </Title>
        <RecNumberWrapper>
          <div>
            <img src="/assets/travelMap/common/person/person_false.png" /> <span>사람인원</span>
          </div>
          <div>
            <img src="/assets/travelMap/common/time/time_false.png" />
            <span>시간대</span>
          </div>
        </RecNumberWrapper>
        <TextWrapper>텍스트 내용</TextWrapper>
        <ButtonWrapper>
          <button>세션 참가 요청</button>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default TravelMapDetail;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 42rem;
  height: 55rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  border-radius: 4px;
  & img {
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;
const TopContainer = styled.div`
  width: 100%;
  height: 9%;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;

  & button {
    border: 1px solid black;
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 0.5rem;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  height: 40%;
  background-color: gray;
  margin-bottom: 3rem;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: center;
`;
const Title = styled.div`
  width: 100%;
  height: 15%;
`;

const RecNumberWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: end;

  & button {
    width: 10rem;
    height: 100%;
    border: 1px solid black;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;
