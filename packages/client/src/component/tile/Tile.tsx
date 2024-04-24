import React, { ReactNode } from "react";
import styled from "styled-components";
import { Mission } from "../../types";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TileProps {
  mission: Mission;
}

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 300px;
`;

const TileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: #ccc;
  border-radius: 4px;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color: #007bff;
  border-radius: 4px;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export default function Tile(mission: Mission) {
  const { name, description, progress_percentage } = mission;
  console.log(mission);
  return (
    <StyledTile>
      <TileHeader>
        <FontAwesomeIcon icon={faFlagUsa} />
        <h3>{name}</h3>
      </TileHeader>
      <i>{description}</i>

      <ProgressText>
        <span>Progress</span>
        {progress_percentage}%
      </ProgressText>
      <ProgressBar>
        <Progress progress={progress_percentage} />
      </ProgressBar>
    </StyledTile>
  );
}
