import { useEffect, useState } from "react";

import styled from "styled-components";
import { Card, RangeSlider } from "@/components/data-display";
import { CheckListData } from "@/types";
import { spaceCraftData } from "./data/spaceCraftData";
import Footer from "./component/Footer";
import PrimaryButton from "@/components/button/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { createRandomCheckListData } from "./utils";

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

const { checkListData } = createRandomCheckListData();

export function SimulatorDashboard({
  launchSpaceCraft,
}: {
  launchSpaceCraft: (checkListData: CheckListData[]) => void;
}) {
  const [lockedValues, setLockedValues] = useState<CheckListData[]>([]);
  const [launchClearance, setLaunchClearance] = useState<
    "partial" | "full" | "none"
  >("none");

  const handleLockedValue = (data: CheckListData, isSet: boolean) => {
    const newLockedValues = lockedValues.filter(
      (lockedValue) => lockedValue.type !== data.type
    );
    if (isSet) {
      setLockedValues([...newLockedValues, data]);
    }
    if (!isSet) {
      setLockedValues(newLockedValues);
    }
  };

  useEffect(() => {
    const verifyCheckListData = (data: CheckListData[]) => {
      const isAllValuesLocked = data.length === checkListData.length;

      const isAllValuesCorrect = data.every((lockedValue) => {
        const { vitals } = lockedValue;
        const { value, simulatorValue } = vitals;
        return value >= simulatorValue!;
      });

      if (isAllValuesLocked && isAllValuesCorrect) {
        console.log("full");
        setLaunchClearance("full");
      }
      if (isAllValuesLocked && !isAllValuesCorrect) {
        setLaunchClearance("partial");
      }
      if (!isAllValuesLocked) {
        setLaunchClearance("none");
      }
    };
    verifyCheckListData(lockedValues);
  }, [lockedValues]);

  const handleAuthorize = () => {
    if (launchClearance === "partial" || launchClearance === "full") {
      launchSpaceCraft(lockedValues);
    }
  };

  return (
    <StyledSimulatorDashboard>
      {checkListData.map((data) => (
        <SimulatorGroup key={data.type}>
          <Card value={data.type} />
          <RangeSlider
            minRange={data.vitals.min}
            maxRange={data.vitals.max}
            data-testid="range-input"
            availableValue={data.vitals.value}
            requiredValue={data.vitals.simulatorValue!}
            unit={data.vitals.unit}
            handleLockedValue={(val, isSet) =>
              handleLockedValue(
                {
                  ...data,
                  vitals: { ...data.vitals, value: val },
                },
                isSet
              )
            }
          />
        </SimulatorGroup>
      ))}
      <Footer
        title={spaceCraftData.spacecraft_name}
        subtitle={"Adjust the vitals"}
      />
      <PrimaryButton
        title="Authorize"
        onClick={handleAuthorize}
        disabled={launchClearance === "none"}
        icon={
          launchClearance === "partial" ? (
            <FontAwesomeIcon icon={faExclamationCircle} />
          ) : launchClearance === "full" ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faClock} />
          )
        }
      />
    </StyledSimulatorDashboard>
  );
}
