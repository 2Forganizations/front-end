import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
//compoents
import TravelMapList from "./travelMapList";
import GoogleMap from "./googleMap";
import TravelMapDetail from "./travelMapDetail";

const TravelMap = () => {
  const [travelDetailModalIsOpen, setTravelDetailModalIsOpen] = useState(false);
  const [selectTravelMapId, setSelectTravelMapId] = useState(0);

  const modalCloseHandler = useCallback(() => {
    setTravelDetailModalIsOpen(false);
  }, []);

  return (
    <Container>
      <TravelMapList
        setSelectTravelMapId={setSelectTravelMapId}
        setTravelDetailModalIsOpen={setTravelDetailModalIsOpen}
      />
      <GoogleMap />
      {travelDetailModalIsOpen && (
        <TravelMapDetail selectTravelMapId={selectTravelMapId} onClick={modalCloseHandler} />
      )}
    </Container>
  );
};

export default TravelMap;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  display: flex;
`;
