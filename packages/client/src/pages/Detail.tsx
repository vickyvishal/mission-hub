import { Link, useParams } from "react-router-dom";
import { Mission } from "../types";
import ContentLayout from "../components/layout/ContentLayout";
import styled from "styled-components";
import CatalogueSurface from "../components/surface/CatalogueSurface";
import SpaceCraft from "../components/surface/SpaceCraft";

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  & div {
    flex-grow: 1;
  }
`;

const BackBtn = styled.span`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export default function Detail({ missions }: { missions: Mission[] }) {
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
      <Link to="/">
        <BackBtn>Back</BackBtn>
      </Link>

      <DetailBody>
        <CatalogueSurface mission={mission} />
        <SpaceCraft
          src={mission.spacecraft_image_src}
          title={mission.spacecraft}
        />
      </DetailBody>
    </ContentLayout>
  );
}
