import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  item: {
    id: number;
    title: string;
    name: string;
    address: string;
    recruitment: number;
    re_sex: string;
    re_age: string;
  };
}

const TravelMapListItem: FC<Props> = ({ item }) => {
  return (
    <Contaienr>
      <Title>{item.title}</Title>
      <MiddleWrapper>
        <Name>{item.name}</Name>
        <Address>{item.address}</Address>
      </MiddleWrapper>
      <BottomWrapper>
        <Rec>정원{item.recruitment}명</Rec>
        <Rec_sex>{item.re_sex}</Rec_sex>
        <Rec_age>{item.re_age}</Rec_age>
      </BottomWrapper>
    </Contaienr>
  );
};

export default TravelMapListItem;

const Contaienr = styled.div`
  width: 37rem;
  height: 10.4rem;
  border: 1px solid black;
  padding: 1.3rem 1.6rem;
  margin-bottom: 1.5rem;
`;
const Title = styled.div`
  width: 23rem;
  height: 1.7rem;
  margin-bottom: 0.8rem;
`;

const MiddleWrapper = styled.div`
  width: 100%;
  height: 1.2rem;
  margin-right: 2.8rem;
  display: flex;
  margin-bottom: 2.8rem;
`;
const Name = styled.div`
  width: 1.9rem;
  height: 100%;
  margin-right: 3.7rem;
`;
const Address = styled.div`
  width: 14.1rem;
  height: 100%;
`;
const BottomWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1.2rem;
`;
const Rec = styled.div`
  width: 3.7rem;
  margin-right: 1.9rem;
`;
const Rec_sex = styled.div`
  width: 3rem;
  margin-right: 1.9rem;
`;
const Rec_age = styled.div`
  width: 8rem;
`;
