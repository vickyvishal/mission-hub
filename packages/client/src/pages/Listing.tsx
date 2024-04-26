import Tile from "../components/tile/Tile";
import ContentLayout from "../components/layout/ContentLayout";
import styled from "styled-components";
import { Mission, Status } from "../types";
import { useNavigate } from "react-router-dom";
import { ReactEventHandler, useState } from "react";
import useFilter from "../hooks/useFilter";
import PrimaryButton from "../components/button/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const TileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
  margin-top: 1rem;
`;

const TileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  gap: 1rem;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 1rem;
  width: 300px;
  border: 2px solid black;
  &:focus-visible {
    outline: none;
  }
`;

const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  label {
    font-weight: bold;
  }
  select {
    padding: 0.5rem;
    height: 100%;
    border: 2px solid black;
    &:focus-visible {
      outline: none;
    }
  }
`;

const StyledFilter = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Listing({
  missions,
  status,
}: {
  missions: Mission[];
  status: Status;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const navigate = useNavigate();

  const [filteredMissions] = useFilter({
    data: missions,
    filterBy: [searchTerm, statusFilter],
  });

  const onTileClick = (mission: Mission) => {
    navigate(`/mission/${mission.id}`);
  };

  if (status === "loading") {
    return <ContentLayout title="Missions">Loading...</ContentLayout>;
  }

  if (status === "error") {
    return <ContentLayout title="Missions">Error!</ContentLayout>;
  }

  return (
    <ContentLayout title="Missions">
      <TileHeader>
        <StyledFilter>
          <StyledInput
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
          <StyledSelect>
            <select
              id="status-filter"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setStatusFilter(e.target.value as Status)
              }
              value={statusFilter}
            >
              <option value="all">All</option>
              <option value="Completed">Completed</option>
              <option value="Active">Active</option>
              <option value="Inactive">In Active</option>
              <option value="Under construction">Under construction</option>
            </select>
          </StyledSelect>
        </StyledFilter>
        <PrimaryButton
          title="Simulation"
          onClick={() => navigate("/simulator")}
          icon={<FontAwesomeIcon icon={faRocket} />}
        />
      </TileHeader>
      <TileWrapper>
        {filteredMissions.map((mission) => (
          <Tile key={mission.name} mission={mission} onClick={onTileClick} />
        ))}
      </TileWrapper>
    </ContentLayout>
  );
}
