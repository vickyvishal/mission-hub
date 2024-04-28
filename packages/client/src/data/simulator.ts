import { Spacecraft } from "../types";

export const spaceCraftData: Spacecraft = {
  spacecraft_name: "Aurora-IX",
  manufacturer: "Stellar Dynamics Corporation",
  mission_type: "Exploration",
  launch_date: "2032-07-15",
  destination: "Outer Solar System",
  crew_capacity: 6,
  payload_capacity_kg: 10000,
  propulsion_system: {
    type: "Nuclear",
    engine_count: 4,
    thrust: {
      value: 250,
      unit: "kN",
    },
  },
  communication_system: {
    type: "Long Range",
    frequency_band: "X-band",
    range: {
      value: 10,
      unit: "AU",
    },
  },
  power_source: {
    type: "Advanced",
    output: {
      value: 500,
      unit: "kW",
    },
  },
  dimensions: {
    length_meters: 50,
    diameter_meters: 10,
    weight_kg: 250000,
  },
  status: "Active",
};
