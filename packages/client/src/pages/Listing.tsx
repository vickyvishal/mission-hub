import Tile from "../component/tile/Tile";
import useMissions from "../hooks/useMissions";
import ContentLayout from "../component/layout/ContentLayout";
import styled from "styled-components";

const TileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  margin-top: 1rem;
`;

export default function Listing() {
  const { missions, status } = useMissions();

  if (status === "loading") {
    return <ContentLayout title="Missions">Loading...</ContentLayout>;
  }

  if (status === "error") {
    return <ContentLayout title="Missions">Error!</ContentLayout>;
  }

  return (
    <ContentLayout title="Missions">
      <TileWrapper>
        {missions.map((mission) => (
          <Tile key={mission.name} {...mission} />
        ))}
      </TileWrapper>
    </ContentLayout>
  );
}
