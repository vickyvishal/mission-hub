import ContentLayout from "../component/layout/ContentLayout";

import styled from "styled-components";
import SimulaterOverview from "../features/simulator/SimulaterOverview";
import SimulatorCheckList from "../features/simulator/SimulatorCheckList";
import SimulatorTimer from "../features/simulator/SimulatorTimer";
import { useState } from "react";

const StyledSimulator = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const AuthorizationBtn = styled.button`
  width: 200px;
  margin: 20px auto;
  text-align: center;
  background-color: #4caf50;
  color: white;
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
            <SimulatorCheckList handleAutorization={launchSpaceCraft} />
          </StyledSimulator>
          <AuthorizationBtn onClick={launchSpaceCraft}>
            Authorize
          </AuthorizationBtn>
        </>
      )}
      {authorised && <SimulatorTimer authorised={authorised} />}
    </ContentLayout>
  );
}
