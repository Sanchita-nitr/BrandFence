import { useEffect, useState } from "react";
import ThreatFiltersModal from "../../components/ThreatFilters";
import NewThreatForm from "../../components/ThreatForm";
import ThreatDetails from "../../features/threats/components/ThreatDetails";
import ThreatsToolbar from "../../features/threats/components/ThreatsToolbar";
import ThreatTable from "../../features/threats/components/ThreatTable";
import useThreats from "../../features/threats/hooks/useThreats";

export default function ThreatsLayout({ mode }) {
  const { data, status } = useThreats(mode);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({
    severity: "",
    status: "",
    platform: "",
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (mode === "deleted") {
      setFilters((prev) => ({ ...prev, status: "deleted" }));
    } else if (mode === "watchlist") {
      setFilters((prev) => ({ ...prev, status: "watchlist" }));
    } else {
      setFilters((prev) => ({ ...prev, status: "" }));
    }
  }, [mode]);

  const filteredData = data
    .filter(
      (threat) =>
        threat.name.toLowerCase().includes(search.toLowerCase()) ||
        threat.source.toLowerCase().includes(search.toLowerCase()) ||
        threat.platform.toLowerCase().includes(search.toLowerCase())
    )
    .filter((threat) => {
      if (filters.severity && threat.severity !== filters.severity)
        return false;
      if (filters.status && threat.status !== filters.status) return false;
      if (
        filters.platform &&
        !threat.platform.toLowerCase().includes(filters.platform.toLowerCase())
      )
        return false;
      return true;
    });

  const handleAddThreat = (newThreat) => {
    console.log("New threat:", newThreat);
    setShowForm(false);
  };

  return (
    <div className="flex h-screen bg-[#f4f4f4] px-10">
      <div className="flex-1 p-4 overflow-y-auto">
        <ThreatsToolbar
          search={search}
          setSearch={setSearch}
          selectedCount={3}
          onAddClick={() => setShowForm(true)}
          filters={filters}
          onFiltersChange={setFilters}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          mode={mode}
        />

        {showForm && (
          <div className="mb-4">
            <NewThreatForm onSubmit={handleAddThreat} />
          </div>
        )}

        {showFilters && (
          <div className="mb-4">
            <ThreatFiltersModal
              filters={filters}
              onChange={setFilters}
              onClose={() => setShowFilters(false)}
            />
          </div>
        )}

        <ThreatTable
          threats={filteredData}
          status={status}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      <ThreatDetails threat={selected} />
    </div>
  );
}
