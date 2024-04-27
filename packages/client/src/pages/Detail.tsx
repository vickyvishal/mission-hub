import { Link, useParams } from "react-router-dom";
import { Mission } from "../types";
import ContentLayout from "../components/layout/ContentLayout";
import styled from "styled-components";
import CatalogueSurface from "../components/surface/CatalogueSurface";
import SpaceCraft from "../components/surface/SpaceCraft";

const DetailHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: baseline;
  }
`;
const MissionImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  & div {
    flex-grow: 1;
  }
`;

const MissionName = styled.h2`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MissionDescription = styled.h3`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DetailHeaderKeyInfo = styled.div``;

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
    <ContentLayout title={mission.name}>
      <Link to="/">
        <BackBtn>Back</BackBtn>
      </Link>
      <DetailHeader>
        <DetailHeaderKeyInfo>
          <MissionName>{mission.name}:</MissionName>
          <MissionDescription>{mission.description}</MissionDescription>
        </DetailHeaderKeyInfo>
        <MissionImg src={mission.image_src} alt={mission.name} />
      </DetailHeader>

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
