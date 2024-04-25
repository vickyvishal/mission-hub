import { useNavigate, useParams } from "react-router-dom";
import { Mission } from "../types";
import ContentLayout from "../component/layout/ContentLayout";
import DetailSurface from "../component/surface/DetailSurface";

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
      <DetailSurface mission={mission} />
    </ContentLayout>
  );
}
