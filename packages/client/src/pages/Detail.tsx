import { useParams } from "react-router-dom";
import { Mission } from "@/types";
import ContentLayout from "@/components/layout/ContentLayout";
import styled from "styled-components";
import { CatalogueSurface, SpaceCraftSurface } from "@/components/surface";

import { useEffect, useState } from "react";

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  & div {
    flex-grow: 1;
  }
`;

const RealTimeUpdate = styled.div`
  display: flex;
  justify-content: flext-start;
  align-items: center;
  gap: 1rem;
  font-style: italic;
`;

export function Detail({ missions }: { missions: Mission[] }) {
  const { missionId } = useParams();
  const [updates, setUpdates] = useState<string>(
    "Recent updates will appear here."
  );
  const mission = missions.filter(
    (mission) => mission.id == Number(missionId)
  )[0];

  useEffect(() => {
    const event = new EventSource("/api/events");

    event.onmessage = (event) => {
      console.log(event.data);
      setUpdates(event.data);
    };
  }, []);

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
        <RealTimeUpdate>{updates}</RealTimeUpdate>
        <CatalogueSurface mission={mission} />
        <SpaceCraftSurface
          src={mission.spacecraft_image_src}
          title={mission.spacecraft}
        />
      </DetailBody>
    </ContentLayout>
  );
}
