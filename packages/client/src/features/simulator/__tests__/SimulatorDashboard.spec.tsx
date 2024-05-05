import { render, screen } from "@testing-library/react";
import { SimulatorDashboard } from "../SimulatorDashboard";
import { describe, it, expect } from "vitest";
import { RangeSlider } from "@/components/data-display";

const mockData = {
  maxRange: 100,
  minRange: 50,
  handleLockedValue: () => {},
  availableValue: 100,
  requiredValue: 70,
  unit: "unit",
};

const setup = () => {
  const utils = render(<RangeSlider {...mockData} />);
  const input = screen.getByLabelText("range-input");
  return {
    input,
    ...utils,
  };
};

describe("SimulatorDashboard", () => {
  it("renders the SimulatorDashboard component", () => {
    render(<SimulatorDashboard launchSpaceCraft={([]) => {}} />);
  });
});
