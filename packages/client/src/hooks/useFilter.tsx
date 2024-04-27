import { useEffect, useState } from "react";
import { Mission } from "../types";

export default function useFilter({
  data,
  filterBy,
}: {
  data: Mission[];
  filterBy: [searchTerm: string, statusFilter: string];
}) {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchTerm, statusFilter] = filterBy;

  useEffect(() => {
    const bouncedSearch = setTimeout(() => {
      const filteredData = data.filter((mission) => {
        const nameMatch = mission.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const statusMatch =
          statusFilter === "all" || mission.status === statusFilter;
        return nameMatch && statusMatch;
      });
      setFilteredData(filteredData);
    }, 300);
    return () => {
      clearTimeout(bouncedSearch);
    };
  }, [data, searchTerm, statusFilter]);

  return [filteredData];
}
