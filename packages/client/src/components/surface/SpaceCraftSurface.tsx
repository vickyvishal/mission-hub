import React from "react";
import styled from "styled-components";

const StyledSpaceCraftDiagram = styled.img`
  width: 60vw;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledSpaceCraft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function SpaceCraftSurface({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [error, setError] = React.useState(false);
  return (
    <StyledSpaceCraft>
      {!error ? (
        <>
          <StyledSpaceCraftDiagram src={src} onError={() => setError(true)} />
          <strong>Spacecraft: {title}</strong>
        </>
      ) : (
        <h3>Image not found</h3>
      )}
    </StyledSpaceCraft>
  );
}
