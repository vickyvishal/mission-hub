import { useEffect, useState } from "react";

export default function useFilter({
  data,
  filterBy,
}: {
  data: any[];
  filterBy: any[];
}) {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchTerm, statusFilter] = filterBy;

  useEffect(() => {
    const filteredData = data.filter((mission) => {
      const nameMatch = mission.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const statusMatch =
        statusFilter === "all" || mission.status === statusFilter;
      return nameMatch && statusMatch;
    });
    setFilteredData(filteredData);
  }, [data, searchTerm, statusFilter]);

  return [filteredData];
}
