import ContentLayout from "@/components/layout/ContentLayout";

import { SimulatorTimer, SimulatorDashboard } from "@/features/simulator";
import { useState } from "react";

export function Simulator() {
  const [isLauching, setIsLaunching] = useState(false);

  const launchSpaceCraft = () => {
    setIsLaunching(true);
  };

  return (
    <ContentLayout title="Simulator">
      {!isLauching ? (
        <>
          <SimulatorDashboard launchSpaceCraft={launchSpaceCraft} />
        </>
      ) : (
        <SimulatorTimer isLauching={isLauching} />
      )}
    </ContentLayout>
  );
}
