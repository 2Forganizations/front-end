import React, { useState } from "react";
import styled from "@emotion/styled";
//compoents
import TravelMapList from "../../component/units/travelMap/travelMapList";
import GoogleMap from "../../component/units/travelMap/googleMap";
import TravelMapDetail from "../../component/units/travelMap/travelMapDetail";

const TravelMap = () => {
  const [travelDetailModalIsOpen, setTravelDetailModalIsOpen] = useState(false);
  const [selectTravelMapId, setSelectTravelMapId] = useState("");
  return (
    <Container>
      <TravelMapList
        setSelectTravelMapId={setSelectTravelMapId}
        setTravelDetailModalIsOpen={setTravelDetailModalIsOpen}
      />
      <GoogleMap />
      {travelDetailModalIsOpen && <TravelMapDetail selectTravelMapId={selectTravelMapId} />}
    </Container>
  );
};

export default TravelMap;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  display: flex;
`;
