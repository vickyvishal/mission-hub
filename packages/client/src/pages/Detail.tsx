import { useParams } from "react-router-dom";
import { Mission } from "@/types";
import ContentLayout from "@/components/layout/ContentLayout";
import styled from "styled-components";
import { CatalogueSurface, SpaceCraftSurface } from "@/components/surface";

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
  if (!missions.length) {
    return;
  }
  const mission = missions.filter(
    (mission) => mission.id == Number(missionId)
  )[0];

  return (
    <ContentLayout
      title={mission.name}
      subTitle={mission.description}
      titleImageSrc={mission.image_src}
    >
      <DetailBody>
        <CatalogueSurface mission={mission} />
        <SpaceCraftSurface
          src={mission.spacecraft_image_src}
          title={mission.spacecraft}
        />
      </DetailBody>
    </ContentLayout>
  );
}
