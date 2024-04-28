import styled from "styled-components";
import { Mission } from "../../types";
import tileImg from "../../assets/nasa_blue.png";
import Flag from "react-flagkit";

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid black;
  margin-bottom: 1rem;
  width: 300px;
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease; /* Add transition for smooth effect */

  &:hover,
  &:focus {
    opacity: 0.8;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

const TileHeader = styled.div`
  display: flex;
  height: 8rem;
  gap: 0.5rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: blue;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

const TileImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

const FlagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const KeyInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid black;
  margin-top: 0.5rem;
`;

const DateInfo = styled.div`
  flex-grow: 4;
  border-right: 2px solid black;

  & div {
    &:first-child {
      color: #007bff;
      font-weight: bold;
    }
    text-align: start;
  }
`;

const StatusInfo = styled.div`
  flex-grow: 1;
  padding-left: 0.5rem;
  & div {
    &:first-child {
      color: #007bff;
      font-weight: bold;
    }
    text-align: start;
  }
`;

export interface TileProps {
  mission: Mission;
  onClick: (mission: Mission) => void;
  tabIndex: number;
}

export function Tile({ mission, onClick, tabIndex }: TileProps) {
  const { name, progress_percentage, countries, launch_date } = mission;
  return (
    <StyledTile
      onClick={() => onClick(mission)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick(mission);
      }}
      tabIndex={tabIndex}
    >
      <TileHeader>
        <TileImg
          src={mission.image_src ? mission.image_src : tileImg}
          alt="tile"
        />
        <Title>{name}</Title>
      </TileHeader>

      <FlagContainer>
        {countries.map((country) => (
          <Flag key={country} country={country} />
        ))}
      </FlagContainer>

      <KeyInfoContainer>
        <DateInfo>
          <div>Launched On</div>
          <div>{launch_date.split("-")[0]}</div>
        </DateInfo>
        <StatusInfo>
          <div>Progress</div>
          <div>{progress_percentage}%</div>
        </StatusInfo>
      </KeyInfoContainer>
    </StyledTile>
  );
}
