import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const StyledLongCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  background-color: #ededed;
  border: 2px solid gray;
  height: 100px;
  width: 300px;
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

const AuthoriseButton = styled.button`
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

export default function LongCards({
  maxRange,
  minRange,
  availableValue,
  requiredValue,
  unit,
}: {
  maxRange: number;
  minRange: number;
  availableValue: number;
  requiredValue: number;
  unit?: string;
}) {
  const [rangeValue, setRangeValue] = React.useState(requiredValue);
  return (
    <StyledLongCards>
      <InteractivePanel>
        <RequiredValue>
          {rangeValue} {unit ?? null}
        </RequiredValue>
        <div>
          <input
            type="range"
            min={minRange}
            max={availableValue}
            value={rangeValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setRangeValue(Number(e.target.value));
            }}
          ></input>
        </div>

        <AuthoriseButton
          color={
            requiredValue > rangeValue || requiredValue > availableValue
              ? "orange"
              : "green"
          }
        >
          <FontAwesomeIcon icon={faCheck} />
        </AuthoriseButton>
      </InteractivePanel>
      <InfoPanel>
        <p>Required: {requiredValue}</p>
        <p>Available: {availableValue}</p>
      </InfoPanel>
    </StyledLongCards>
  );
}
