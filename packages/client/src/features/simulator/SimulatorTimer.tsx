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

export function SimulatorTimer({ isLauching }: { isLauching: boolean }) {
  const [time, setTime] = React.useState(10);

  React.useEffect(() => {
    if (isLauching && time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isLauching, time]);
  return (
    <StyledContainer>
      <StyledSimilatorTimer>{time}</StyledSimilatorTimer>
    </StyledContainer>
  );
}
