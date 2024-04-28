import { SimulatorSpacecraft, Spacecraft } from "../../../types";

export const spaceCraftData: SimulatorSpacecraft = {
  spacecraft_name: "Aurora-IX",
  manufacturer: "Stellar Dynamics Corporation",
  mission_type: "Exploration",
  launch_date: "2032-07-15",
  destination: "Outer Solar System",
  crew_capacity: 6,
  payload_capacity_kg: 10000,
  checkListData: [
    {
      type: "Propulsion",
      vitals: {
        value: 10,
        max: 12,
        min: 7,
        unit: "KN",
      },
    },
    {
      type: "Communication",
      vitals: {
        value: 250,
        max: 300,
        min: 200,
        unit: "AU",
      },
    },
    {
      type: "Power",
      vitals: {
        value: 500,
        max: 700,
        min: 350,
        unit: "kW",
      },
    },
  ],
  dimensions: {
    length_meters: 50,
    diameter_meters: 10,
    weight_kg: 250000,
  },
  status: "Active",
};
