import { useParams } from "react-router-dom";
import { Mission, Status } from "@/types";
import ContentLayout from "@/components/layout/ContentLayout";
import styled from "styled-components";
import { CatalogueSurface, SpaceCraftSurface } from "@/components/surface";

import { LiveUpdate } from "@/components/data-display";

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  & div {
    flex-grow: 1;
  }
`;

export function Detail({
  missions,
  status,
}: {
  missions: Mission[];
  status: Status;
}) {
  const { missionId } = useParams();
  if (status === "loading") {
    return <ContentLayout title="Missions">Loading...</ContentLayout>;
  }

  if (status === "error") {
    return <ContentLayout title="Missions">Error!</ContentLayout>;
  }

  const mission = missions.filter(
    (mission) => mission.id == Number(missionId)
  )[0];

  if (!mission) {
    return <ContentLayout title="Missions">Mission not found!</ContentLayout>;
  }

  return (
    <ContentLayout
      title={mission.name}
      subTitle={mission.description}
      titleImageSrc={mission.image_src}
    >
      <DetailBody>
        <LiveUpdate />
        <CatalogueSurface mission={mission} />
        <SpaceCraftSurface
          src={mission.spacecraft_image_src}
          title={mission.spacecraft}
        />
      </DetailBody>
    </ContentLayout>
  );
}
