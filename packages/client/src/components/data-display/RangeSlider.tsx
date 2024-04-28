import React, { useEffect } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";

const StyledRangeSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background-color: #ededed;
  border: 2px solid gray;
  height: 100px;
  width: 350px;
  font-weight: bold;
`;

const RequiredValue = styled.p`
  height: 70%;
  background-color: #ced2d7;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`;

const buttonColor: { [key: string]: string } = {
  green: "green",
  red: "red",
  orange: "orange",
  gray: "gray",
};

const SetButton = styled.button`
  height: 70%;
  background-color: ${(props) => buttonColor[props.color!] ?? "blue"};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  color: white;
  border: none;
`;

const InfoPanel = styled.div`
  display: flex;
  gap: 1rem;
`;

const InteractivePanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  flex-grow: 2;
`;

export function RangeSlider({
  maxRange,
  minRange,
  availableValue,
  requiredValue,
  unit,
  handleLockedValue,
}: {
  maxRange: number;
  minRange: number;
  availableValue: number;
  requiredValue: number;
  handleLockedValue: (value: number) => void;
  unit?: string;
}) {
  const [rangeValue, setRangeValue] = React.useState(requiredValue);
  const [isSet, setIsSet] = React.useState(false);

  useEffect(() => {
    if (isSet) {
      handleLockedValue(rangeValue);
    }
  }, [isSet, rangeValue, handleLockedValue]);
  return (
    <StyledRangeSlider>
      <InteractivePanel>
        <RequiredValue>{rangeValue}</RequiredValue>
        <div>
          <input
            type="range"
            min={minRange}
            max={availableValue}
            value={rangeValue}
            onChange={
              !isSet
                ? (e: React.ChangeEvent<HTMLInputElement>) => {
                    setRangeValue(Number(e.target.value));
                  }
                : undefined
            }
          ></input>
        </div>

        <SetButton
          onClick={() => {
            setIsSet((val) => !val);
          }}
          color={
            requiredValue > rangeValue || requiredValue > availableValue
              ? "orange"
              : "green"
          }
        >
          <FontAwesomeIcon icon={isSet ? faLock : faUnlock} />
        </SetButton>
      </InteractivePanel>
      <InfoPanel>
        <p>
          Required: {requiredValue} <span>{unit}</span>
        </p>
        <p>
          Available: {availableValue} <span>{unit}</span>
        </p>
      </InfoPanel>
    </StyledRangeSlider>
  );
}
