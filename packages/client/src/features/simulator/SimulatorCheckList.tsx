import styled from "styled-components";
import { RangeSlider } from "../../components/data-display";
import Footer from "./component/Footer";
import { Spacecraft } from "../../types";

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

export function SimulatorCheckList({
  checklistData,
  spaceCraftData,
  handleLockedValue,
}: {
  checklistData: Pick<
    Spacecraft,
    "propulsion_system" | "communication_system" | "power_source"
  >;
  spaceCraftData: Spacecraft;
  handleLockedValue: (value: number, entry: string) => void;
}) {
  const { propulsion_system, communication_system, power_source } =
    checklistData;

  return (
    //the range slider could be mapped from an array, including the overview Simulator Overview
    <StyledSimulatorCheckList>
      <SimulatorGroup>
        <RangeSlider
          requiredValue={propulsion_system.thrust.value}
          availableValue={spaceCraftData.propulsion_system.thrust.value}
          maxRange={300}
          minRange={150}
          unit={propulsion_system.thrust.unit}
          handleLockedValue={(val) =>
            handleLockedValue(val, "propulsion_system")
          }
        />
      </SimulatorGroup>
      <SimulatorGroup>
        <RangeSlider
          requiredValue={communication_system.range.value}
          availableValue={spaceCraftData.communication_system.range.value}
          maxRange={12}
          minRange={7}
          unit={communication_system.range.unit}
          handleLockedValue={(val) =>
            handleLockedValue(val, "communication_system")
          }
        />
      </SimulatorGroup>
      <SimulatorGroup>
        <RangeSlider
          requiredValue={power_source.output.value}
          availableValue={spaceCraftData.power_source.output.value}
          maxRange={700}
          minRange={350}
          unit={power_source.output.unit}
          handleLockedValue={(val) => handleLockedValue(val, "power_source")}
        />
      </SimulatorGroup>
      <Footer title={"Space Craft Vitals"} />
    </StyledSimulatorCheckList>
  );
}
