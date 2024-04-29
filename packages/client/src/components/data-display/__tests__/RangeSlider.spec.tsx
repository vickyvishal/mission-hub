import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { RangeSlider } from "../RangeSlider";

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

describe("RangeSlider", () => {
  it("renders the RangeSlider component", () => {
    render(<RangeSlider {...mockData} />);
  });

  it("renders the RangeSlider component with the required value", () => {
    const { getByTestId } = render(<RangeSlider {...mockData} />);
    expect(getByTestId("required-value").textContent).toBe("Required: 70 unit");
  });

  it("renders the RangeSlider component with the available value", () => {
    const { getByTestId } = render(<RangeSlider {...mockData} />);
    expect(getByTestId("available-value").textContent).toBe(
      "Available: 100 unit"
    );
  });

  it("renders the RangeSlider component with the range input", () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  it("It should not allow to have value more that available unit", () => {
    const { input } = setup();
    expect(input).toHaveAttribute("max", "100");
  });

  it("It should not allow to have value less that required unit", () => {
    const { input } = setup();
    expect(input).toHaveAttribute("min", "50");
  });

  it("It should have the required value as the initial value", () => {
    const { input } = setup();
    expect(input).toHaveValue("50");
  });

  it("should be disabled when the set button is clicked", async () => {
    const { input } = setup();
    const button = screen.getByTestId("set-button");
    await button.click();
    expect(input).toBeDisabled();
  });

  it("should be enabled when the set button is clicked twice", async () => {
    const { input } = setup();
    const button = screen.getByTestId("set-button");
    await button.click();
    await button.click();
    expect(input).not.toBeDisabled();
  });

  it("should have a orange color when the current value is less than required", async () => {
    const { input } = setup();
    const button = screen.getByTestId("set-button");
    await button.click();
    expect(button).toHaveStyle("background-color: rgb(255, 165, 0)");
  });

  it("renders the RangeSlider component with the set button", () => {
    const { getByRole } = render(<RangeSlider {...mockData} />);
    expect(getByRole("button")).toBeInTheDocument();
  });
});
