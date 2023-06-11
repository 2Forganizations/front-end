import React, { FC } from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";

//type
import { TravelMapList } from "./index";

interface Props {
  item: TravelMapList;
  onClick: () => void;
}

const TravelMapListItem: FC<Props> = ({ item, onClick }) => {
  const startDate = dayjs(item.startDate).format("YYYY-MM-DD");
  const endDate = dayjs(item.endDate).format("YYYY-MM-DD");

  return (
    <Contaienr onClick={onClick}>
      <LeftContainer>img</LeftContainer>
      <RightContainer>
        <TopContainer>
          <TopWrapper>
            <img src="/assets/travelMap/category/new/select_new.png" />
            <Age_Sex>
              <SexWrapper>
                {item.recruitNumber.recruitEtcNumber
                  ? "남녀"
                  : item.recruitNumber.recruitManNumber
                  ? "남자"
                  : "여자"}
              </SexWrapper>
              <AgeWrapper>
                {item.minAge}-{item.maxAge}대
              </AgeWrapper>
            </Age_Sex>
          </TopWrapper>
        </TopContainer>

        <MiddleWrapper>
          <h3>{item.title}</h3>
          <p>
            <img src="/assets/travelMap/address/addressPin/select_addressPin.png" />
            {item.address.nation} {item.address.city} {item.address.detail}
          </p>
        </MiddleWrapper>
        <BottomWrapper>
          {item.recruitNumber.recruitEtcNumber && (
            <RecruitManNumberWrapper>
              <img src="/assets/travelMap/common/person/person_false.png" />
              <div>{item.recruitNumber.recruitEtcNumber}</div>
            </RecruitManNumberWrapper>
          )}
          {item.recruitNumber.recruitManNumber && (
            <RecruitManNumberWrapper>
              <img src="/assets/travelMap/common/person/person_false.png" />
              <div>{item.recruitNumber.recruitManNumber}</div>
            </RecruitManNumberWrapper>
          )}
          {item.recruitNumber.recruitWomanNumber && (
            <RecruitManNumberWrapper>
              <img src="/assets/travelMap/common/person/person_false.png" />
              <div>{item.recruitNumber.recruitWomanNumber}</div>
            </RecruitManNumberWrapper>
          )}

          <TimeWrapper>
            <img src="/assets/travelMap/common/time/time_false.png" />
            <div>
              {startDate} - {endDate}
            </div>
          </TimeWrapper>
        </BottomWrapper>
      </RightContainer>
    </Contaienr>
  );
};

export default TravelMapListItem;

const Contaienr = styled.div`
  width: 100%;
  height: 12rem;
  border: 1px solid whitesmoke;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  display: flex;
`;
const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
  border: 1px solid black;
  background-color: gray;
`;
const RightContainer = styled.div`
  width: 70%;
  height: 100%;
  padding: 0.3rem;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    height: 2rem;
  }
`;
const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const MiddleWrapper = styled.div`
  width: 100%;

  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & p {
    & img {
      height: 1.3rem;
      margin-right: 0.3rem;
    }
  }
`;
const Age_Sex = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  justify-content: end;
`;
const SexWrapper = styled.div`
  width: 3rem;
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe1e1;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
`;
const AgeWrapper = styled.div`
  background-color: #fff5e1;
  color: #cf7c00;
  font-size: 0.5rem;
  display: flex;
  text-align: center;
  align-items: center;
  border-radius: 0.5rem;
`;
const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  flex-direction: column;
`;

const RecruitManNumberWrapper = styled.div`
  display: flex;
  & > img {
    margin-right: 0.5rem;
    height: 1.5rem;
  }
`;

const TimeWrapper = styled.div`
  display: flex;
  & > img {
    margin-right: 0.5rem;
    height: 1.5rem;
  }
`;
