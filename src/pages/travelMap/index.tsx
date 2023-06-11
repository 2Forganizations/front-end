import React, { useState } from "react";
import styled from "@emotion/styled";

//compoents
import TravelMap from "@/component/units/travelMap";

const TravelMapPage = () => {
  return (
    <>
      <TravelMap />
    </>
  );
};

export default TravelMapPage;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 6rem);
  display: flex;
`;
