import { render, screen } from "@testing-library/react";
import { SimulatorDashboard } from "../SimulatorDashboard";
import { describe, it, expect } from "vitest";

describe("SimulatorDashboard", () => {
  it("renders the SimulatorDashboard component", () => {
    render(<SimulatorDashboard launchSpaceCraft={() => {}} />);
  });

  it("has a disabled authorize button", () => {
    const { getByText } = render(
      <SimulatorDashboard launchSpaceCraft={() => {}} />
    );

    expect(getByText(/Authorize/i).closest("button")).toHaveAttribute(
      "disabled"
    );
  });
});
