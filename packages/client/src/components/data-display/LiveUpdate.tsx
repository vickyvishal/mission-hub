import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledLiveUpdates = styled.div`
  display: flex;
  justify-content: flext-start;
  align-items: center;
  gap: 1rem;
  font-style: italic;
`;

export function LiveUpdate() {
  const [updates, setUpdates] = useState<string>(
    "Recent updates will appear here."
  );
  useEffect(() => {
    const event = new EventSource("/api/events");

    event.onmessage = (event) => {
      setUpdates(event.data);
    };
    return () => {
      event.close();
    };
  }, []);
  return <StyledLiveUpdates>{updates}</StyledLiveUpdates>;
}
