import { render } from "@testing-library/react";
import { SimulatorDashboard } from "../SimulatorDashboard";
import { describe, it } from "vitest";

describe("SimulatorDashboard", () => {
  it("renders the SimulatorDashboard component", () => {
    render(<SimulatorDashboard launchSpaceCraft={([]) => {}} />);
  });
});
