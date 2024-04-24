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
}

export interface Spacecraft {
  name: string;
  fuel_levels: string;
  engine_readiness: string;
  communication_antenna: string;
  critical_systems: {
    power_system: string;
    propulsion_system: string;
    thermal_control_system: string;
    navigation_system: string;
  };
}
