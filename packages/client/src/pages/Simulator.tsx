import ContentLayout from "@/components/layout/ContentLayout";

import { SimulatorTimer, SimulatorDashboard } from "@/features/simulator";
import { CheckListData } from "@/types";
import { useState } from "react";

export function Simulator() {
  const [launchData, setLaunchData] = useState<CheckListData[]>([]);

  const launchSpaceCraft = (lockedValue: CheckListData[]) => {
    setLaunchData(lockedValue);
  };

  return (
    <ContentLayout title="Simulator">
      {launchData.length === 0 ? (
        <>
          <SimulatorDashboard launchSpaceCraft={launchSpaceCraft} />
        </>
      ) : (
        <SimulatorTimer launchData={launchData} />
      )}
    </ContentLayout>
  );
}
