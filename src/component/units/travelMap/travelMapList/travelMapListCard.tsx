import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  item: {
    id: string;
    title: string;
    content: string;
    category: string;
    startDate: string;
    endDate: string;
    startAge: string;
    endAge: string;
    recruitManNumber: string | null;
    recruitWomanNumber: string | null;
    recruitEtcNumber: string | null;

    adress: {
      nation: string;
      city: string;
      detail: string;
      longitude: string;
      latitude: string;
    };
    owner: {
      id: string;
      username: string;
      role: string;
      profileImage: string | null;
    };
  };
  onClick: () => void;
}

const TravelMapListItem: FC<Props> = ({ item, onClick }) => {
  return (
    <Contaienr onClick={onClick}>
      <TopContainer>
        <TopWrapper>
          <Title>
            {item.adress.nation} {item.adress.city}
          </Title>
          <Name>
            {item.owner.username} {item.owner.profileImage}
          </Name>
        </TopWrapper>
        <div>{item.startAge}분</div>
      </TopContainer>

      <MiddleWrapper>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </MiddleWrapper>
      <BottomWrapper>
        {item.category === "eat" ? <img src="/assets/travelMap/eat.png" alt="eat" /> : null}
        {/* {item.category === "eat" ? <img src="/assets/travelMap/eat.png" alt="eat" /> : null}
        {item.category === "eat" ? <img src="/assets/travelMap/eat.png" alt="eat" /> : null} */}
        <BLeftWrapper>
          <div>
            {item.startAge}~{item.endAge}
          </div>
          <div>{item.recruitManNumber}</div>
        </BLeftWrapper>
      </BottomWrapper>
    </Contaienr>
  );
};

export default TravelMapListItem;

const Contaienr = styled.div`
  width: 100%;
  height: 13rem;
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 30%;
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
`;
const Title = styled.div`
  width: 23rem;
  height: 1.7rem;
  margin-bottom: 0.8rem;
`;

const MiddleWrapper = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Name = styled.div`
  width: 1.9rem;
  height: 100%;
  margin-right: 3.7rem;
`;

const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: space-between;
`;

const BLeftWrapper = styled.div`
  min-width: 10rem;
  height: 100%;
  display: flex;
  justify-content: end;
  font-size: 1.2rem;
  & div {
    margin-left: 1rem;
  }
`;
