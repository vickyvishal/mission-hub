import ContentLayout from "../components/layout/ContentLayout";

import styled from "styled-components";
import {
  SimulaterOverview,
  SimulatorCheckList,
  SimulatorTimer,
} from "../features/simulator";
import { useState } from "react";

import PrimaryButton from "../components/button/PrimaryButton";
import { Spacecraft } from "../types";
import SimulatorDashboard from "../features/simulator/SimulatorDashboard";
import { spaceCraftData } from "../data/simulator";

const StyledSimulator = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

type CheckList = "propulsion_system" | "communication_system" | "power_source";

type CheckListData = Pick<Spacecraft, CheckList>;

const createRandomCheckListData = (): CheckListData => {
  //move to utils
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
      engine_count: 0,
    },
    communication_system: {
      type: "Long Range",
      range: {
        value: communication_system_range,
        unit: "AU",
      },
      frequency_band: "",
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

const checklistData = createRandomCheckListData();
const checklistedSpaceCraftData = Object.keys(checklistData).map((key) => {
  //better name please
  const typedKey = key as CheckList;
  const finalData = {
    availableValue: spaceCraftData[typedKey],
    requiredValue: checklistData[typedKey],
  };
  return finalData;
});

export default function Simulator() {
  const [authorised, setAuthorised] = useState(false);
  const [isSimulatorSafe, setIsSimulatorSafe] = useState(false);

  const handleLockedValue = (value: number, entry: string) => {
    console.log("handleLockedValue", value, entry);
  };

  const launchSpaceCraft = () => {
    setAuthorised(true);
  };
  return (
    <ContentLayout title="Simulator">
      {!authorised && (
        <>
          <SimulatorDashboard />
          <PrimaryButton title="Authorize" onClick={launchSpaceCraft} />
        </>
      )}
      {authorised && <SimulatorTimer authorised={authorised} />}
    </ContentLayout>
  );
}
