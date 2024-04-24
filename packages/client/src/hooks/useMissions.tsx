import { useEffect, useState } from "react";
import { Mission } from "../types";

export type Status = "idle" | "loading" | "error";

export default function useMissions() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    setStatus("loading");
    fetch("http://localhost:3000/api/missions")
      .then((response) => response.json())
      .then((data) => {
        setMissions(data);
        setStatus("idle");
      })
      .catch(() => setStatus("error"));
  }, []);
  return { missions, status };
}
