import ContentLayout from "../components/layout/ContentLayout";

import styled from "styled-components";
import SimulaterOverview from "../features/simulator/SimulaterOverview";
import SimulatorCheckList from "../features/simulator/SimulatorCheckList";
import SimulatorTimer from "../features/simulator/SimulatorTimer";
import { useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";

const StyledSimulator = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export default function Simulator() {
  const [authorised, setAuthorised] = useState(false);

  const launchSpaceCraft = () => {
    setAuthorised(true);
  };
  return (
    <ContentLayout title="Simulator">
      {!authorised && (
        <>
          <StyledSimulator>
            <SimulaterOverview />
            <SimulatorCheckList />
          </StyledSimulator>
          <PrimaryButton title="Authorize" onClick={launchSpaceCraft} />
        </>
      )}
      {authorised && <SimulatorTimer authorised={authorised} />}
    </ContentLayout>
  );
}
