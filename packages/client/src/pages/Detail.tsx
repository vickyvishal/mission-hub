import { useParams } from "react-router-dom";
import { Mission } from "@/types";
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

export function Detail({ missions }: { missions: Mission[] }) {
  const { missionId } = useParams();

  const mission = missions.filter(
    (mission) => mission.id == Number(missionId)
  )[0];

  if (!missions.length) {
    return;
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
