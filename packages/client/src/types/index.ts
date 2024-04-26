export interface Mission {
  id: number;
  name: string;
  status: string;
  description: string;
  launch_date: string;
  expected_duration: string;
  current_location: string;
  spacecraft: string;
  spacecraft_trajectory: string;
  key_milestone: string;
  progress_percentage: number;
  recent_update: string;
  countries: string[];
  organizations: string[];
  image_src: string;
  spacecraft_image_src: string;
}

export interface Spacecraft {
  spacecraft_name: string;
  manufacturer: string;
  mission_type: string;
  launch_date: string;
  destination: string;
  crew_capacity: number;
  payload_capacity_kg: number;
  propulsion_system: {
    type: string;
    engine_count: number;
    thrust: string;
  };
  communication_system: {
    type: string;
    frequency_band: string;
    range: string;
  };
  power_source: {
    type: string;
    output: string;
  };
  dimensions: {
    length_meters: number;
    diameter_meters: number;
    weight_kg: number;
  };
  status: string;
}

export type Status = "idle" | "loading" | "error";
