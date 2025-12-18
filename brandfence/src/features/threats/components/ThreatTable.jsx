import ThreatRow from "./ThreatRow";

export default function ThreatTable({
  threats = [],
  status,
  selected,
  onSelect,
}) {
  if (status === "loading") {
    return <div className="text-gray-400">Loading threats…</div>;
  }

  return (
    <div className="space-y-3">
      {threats.map((threat) => (
        <ThreatRow
          key={threat.id}
          threat={threat}
          selected={selected}
          onClick={() => onSelect(threat)}
        />
      ))}
    </div>
  );
}
