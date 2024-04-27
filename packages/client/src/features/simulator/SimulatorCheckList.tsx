import React from "react";
import styled from "styled-components";
import RangeSlider from "../../components/data-display/RangeSlider";
import spaceCraftData from "./data/simulator.json";

const StyledSimulatorCheckList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SimulatorGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 300px;
`;

const createRandomCheckListData = () => {
  const propulsion_system_thrust = Math.floor(
    Math.random() * (300 - 150) + 150
  );
  const communication_system_range = Math.floor(Math.random() * (12 - 7) + 7);
  const power_source_output = Math.floor(Math.random() * (700 - 350) + 350);
  return {
    propulsion_system: {
      type: "Nucelear",
      thrust: {
        value: propulsion_system_thrust,
        unit: "kN",
      },
    },
    communication_system: {
      type: "Long Range",
      range: {
        value: communication_system_range,
        unit: "AU",
      },
    },
    power_source: {
      type: "Solar",
      output: {
        value: power_source_output,
        unit: "KW",
      },
    },
  };
};

export default function SimulatorCheckList() {
  const { propulsion_system, communication_system, power_source } =
    createRandomCheckListData();

  return (
    <StyledSimulatorCheckList>
      <SimulatorGroup>
        <RangeSlider
          requiredValue={propulsion_system.thrust.value}
          availableValue={spaceCraftData.propulsion_system.thrust.value}
          maxRange={300}
          minRange={150}
          unit={propulsion_system.thrust.unit}
        />
      </SimulatorGroup>
      <SimulatorGroup>
        <RangeSlider
          requiredValue={communication_system.range.value}
          availableValue={spaceCraftData.communication_system.range.value}
          maxRange={12}
          minRange={7}
          unit={communication_system.range.unit}
        />
      </SimulatorGroup>
      <SimulatorGroup>
        <RangeSlider
          requiredValue={power_source.output.value}
          availableValue={spaceCraftData.power_source.output.value}
          maxRange={700}
          minRange={350}
          unit={power_source.output.unit}
        />
      </SimulatorGroup>
      <strong>Space Craft Vitals</strong>
    </StyledSimulatorCheckList>
  );
}
