import React from "react";

import styled from "styled-components";
import { Card, RangeSlider } from "../../components/data-display";
import { SimulatorSpacecraft, Spacecraft } from "../../types";
import { spaceCraftData } from "./data/spaceCraftData";
import Footer from "./component/Footer";

const StyledSimulatorDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
`;
const SimulatorGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

console.log(spaceCraftData);

const createRandomCheckListData = (): SimulatorSpacecraft => {
  const randomSpaceCraftData = spaceCraftData.checkListData.map((data) => {
    const randomValue = Math.floor(
      Math.random() * (data.vitals.max - data.vitals.min) + data.vitals.min
    );
    return {
      ...data,
      vitals: {
        ...data.vitals,
        simulatorValue: randomValue,
      },
    };
  });
  return {
    ...spaceCraftData,
    checkListData: randomSpaceCraftData,
  };
};

export default function SimulatorDashboard() {
  const { checkListData } = createRandomCheckListData();

  const handleLockedValue = (value: number) => {
    console.log(value);
  };

  return (
    <StyledSimulatorDashboard>
      {checkListData.map((data) => (
        <SimulatorGroup key={data.type}>
          <Card value={data.type} />
          <RangeSlider
            minRange={data.vitals.min}
            maxRange={data.vitals.max}
            availableValue={data.vitals.value}
            requiredValue={data.vitals.simulatorValue!}
            unit={data.vitals.unit}
            handleLockedValue={handleLockedValue}
          />
        </SimulatorGroup>
      ))}
      <Footer
        title={spaceCraftData.spacecraft_name}
        subtitle={"Adjust the vitals"}
      />
    </StyledSimulatorDashboard>
  );
}
