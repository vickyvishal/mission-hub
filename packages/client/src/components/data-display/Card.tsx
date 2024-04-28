import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  background-color: #fff;
  border: 2px solid gray;
  height: 100px;
  width: 200px;
  font-weight: bold;
`;

export function Card({
  value,
  unit,
}: {
  value: string | number;
  unit?: string;
}) {
  return (
    <StyledCard>
      <p>
        {value} {unit ?? null}
      </p>
    </StyledCard>
  );
}
