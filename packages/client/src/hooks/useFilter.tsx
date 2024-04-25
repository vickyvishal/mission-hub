import { useEffect, useState } from "react";

export default function useFilter({
  data,
  filterBy,
}: {
  data: any[];
  filterBy: any[];
}) {
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    const [searchTerm, statusFilter] = filterBy;
    const filteredData = data.filter((mission) => {
      const nameMatch = mission.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const statusMatch =
        statusFilter === "all" || mission.status === statusFilter;
      return nameMatch && statusMatch;
    });
    setFilteredData(filteredData);
  }, [data, filterBy[0], filterBy[1]]);

  return [filteredData];
}
