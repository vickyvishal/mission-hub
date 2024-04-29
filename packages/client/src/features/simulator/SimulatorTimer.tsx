import { CheckListData } from "@/types";
import React from "react";

import styled from "styled-components";

const StyledSimilatorTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border: 2px solid gray;
  border-radius: 50%;
  font-size: 2rem;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const VitalsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

export function SimulatorTimer({
  launchData,
}: {
  launchData: CheckListData[];
}) {
  const [time, setTime] = React.useState(10);

  React.useEffect(() => {
    if (launchData && time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [launchData, time]);
  return (
    <StyledContainer>
      {time !== 0 ? (
        <StyledSimilatorTimer>{time}</StyledSimilatorTimer>
      ) : (
        <VitalsContainer>
          <h2>Launched with</h2>

          {launchData.map((data) => (
            <div key={data.type}>
              <h3>{data.type}</h3>
              <h3>{data.vitals.value}</h3>
              <p>{data.vitals.unit}</p>
            </div>
          ))}
        </VitalsContainer>
      )}
    </StyledContainer>
  );
}
