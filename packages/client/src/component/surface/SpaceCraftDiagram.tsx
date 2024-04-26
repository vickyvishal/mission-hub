import React from "react";
import styled from "styled-components";

const StyledSpaceCraftDiagram = styled.img`
  width: 500px;

  display: flex;
  flex-grow: 1
  object-fit: cover;
  border: 2px solid black;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export default function SpaceCraftDiagram({ src }: { src: string }) {
  console.log(src);
  const [error, setError] = React.useState(false);
  return (
    <div>
      {!error && (
        <StyledSpaceCraftDiagram
          src={src}
          onError={() => setError(true)}
        ></StyledSpaceCraftDiagram>
      )}
    </div>
  );
}
