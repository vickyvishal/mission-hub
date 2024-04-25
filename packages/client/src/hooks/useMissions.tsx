import { useEffect, useState } from "react";
import { Mission, Status } from "../types";

export default function useMissions() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    setStatus("loading");
    const cache = sessionStorage.getItem("missions");
    if (cache) {
      setMissions(JSON.parse(cache));
      setStatus("idle");
      return;
    }

    const fetchMissions = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/missions");
        const data = await response.json();
        setMissions(data);
        setStatus("idle");
        sessionStorage.setItem("missions", JSON.stringify(data));
      } catch (error) {
        setStatus("error");
      }
    };

    fetchMissions();
  }, []);
  return { missions, status };
}
