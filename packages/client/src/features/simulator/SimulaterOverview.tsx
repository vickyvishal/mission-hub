import React from "react";
import { Spacecraft } from "../../types";
import spaceCraftData from "./data/simulator.json";

import styled from "styled-components";
import Card from "../../component/tile/Card";

const StyledSimulaterOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SimulatorGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 300px;
`;

export default function SimulaterOverview() {
  const { propulsion_system, communication_system, power_source } =
    spaceCraftData;

  return (
    <StyledSimulaterOverview>
      <SimulatorGroup>
        <Card value={propulsion_system.type} />
        <Card
          value={propulsion_system.thrust.value}
          unit={propulsion_system.thrust.unit}
        />
      </SimulatorGroup>
      <SimulatorGroup>
        <Card value={communication_system.type} />
        <Card
          value={communication_system.range.value}
          unit={communication_system.range.unit}
        />
      </SimulatorGroup>
      <SimulatorGroup>
        <Card value={power_source.type} />
        <Card
          value={power_source.output.value}
          unit={power_source.output.unit}
        />
      </SimulatorGroup>

      <strong>Space Craft Vitals</strong>
    </StyledSimulaterOverview>
  );
}
