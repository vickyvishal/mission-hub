import React from "react";

import styled from "styled-components";
import { Mission } from "../../types";

const StyledDetailSurface = styled.div`
  display: flex;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default function DetailSurface({ mission }: { mission: Mission }) {
  return (
    <StyledDetailSurface>
      <p>{mission.expected_duration}</p>
      <p>{mission.launch_date}</p>
      <p>Progress: {mission.progress_percentage}%</p>
      <p>{mission.countries[0]}</p>
    </StyledDetailSurface>
  );
}
