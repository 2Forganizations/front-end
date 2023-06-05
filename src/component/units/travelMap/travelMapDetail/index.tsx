import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  selectTravelMapId: string;
}
const TravelMapDetail: FC<Props> = ({ selectTravelMapId }) => {
  console.log("hello", selectTravelMapId);
  return <Container></Container>;
};

export default TravelMapDetail;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50rem;
  height: 40rem;
  border-radius: 1rem;
  background-color: #fff;
  border-radius: 4px;
`;
