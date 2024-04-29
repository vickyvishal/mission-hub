import { Tile } from "@/components/data-display";
import ContentLayout from "@/components/layout/ContentLayout";
import styled from "styled-components";
import { Mission, Status } from "@/types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFilter from "@/hooks/useFilter";
import PrimaryButton from "@/components/button/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const TileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const TileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 1rem;
  width: 300px;
  border: 2px solid black;

  @media screen and (max-width: 768px) {
    width: 100%;
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
  }
`;

const StyledFilter = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StyledPagination = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

export function Listing({
  missions,
  status,
}: {
  missions: Mission[];
  status: Status;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

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
                setStatusFilter(e.target.value)
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
      </TileHeader>
      <TileWrapper>
        {filteredMissions.slice(0, currentPage * 10).map((mission) => (
          <Tile
            key={mission.name}
            mission={mission}
            onClick={onTileClick}
            tabIndex={0}
          />
        ))}
      </TileWrapper>
      {currentPage * 10 < filteredMissions.length && (
        <StyledPagination>
          <PrimaryButton
            title="Show More"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            icon={<FontAwesomeIcon icon={faArrowDown} />}
          />
        </StyledPagination>
      )}
    </ContentLayout>
  );
}
