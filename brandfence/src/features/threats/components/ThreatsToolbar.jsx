import { BsPlusLg } from "react-icons/bs";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
} from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdDateRange } from "react-icons/md";

export default function ThreatsToolbar({
  search,
  setSearch,
  selectedCount = 0,
  onAddClick,
  showFilters,
  setShowFilters,
  mode,
}) {
  const getHeading = () => {
    if (mode === "watchlist") return "Threat Watchlist";
    if (mode === "deleted") return "Deleted Threats";
    return "Threats";
  };

  return (
    <div className="mb-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{getHeading()}</h1>

        <div className="flex items-center gap-3 flex-1 max-w-3xl mx-8">
          <div className="relative">
            <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full text-sm">
              Type
              <FiChevronDown />
            </button>
          </div>

          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by Threats name, platform"
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <span>1–50 of 1,137</span>
          <FiChevronLeft className="text-xl cursor-pointer" />
          <FiChevronRight className="text-xl cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input type="checkbox" className="w-5 h-5" />
        <span className="text-gray-500">{selectedCount} Selected</span>

        <button
          onClick={onAddClick}
          className="w-10 h-10 rounded-lg border border-blue-400 text-blue-600 flex items-center justify-center"
        >
          <BsPlusLg />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-10 h-10 rounded-lg border border-blue-300 text-blue-600 flex items-center justify-center"
        >
          <HiOutlineAdjustmentsHorizontal />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-300 text-blue-600">
          <MdDateRange />
          Date Filter
        </button>
        <SeverityChip color="bg-[#FF718B]" />
        <SeverityChip color="bg-[#FCB5C3]" />
        <SeverityChip color="bg-[#F5C710]" />
        <SeverityChip color="bg-[#7FE47E]" />
      </div>
    </div>
  );
}

function SeverityChip({ color }) {
  return (
    <div
      className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}
    >
      <span className="text-white font-semibold">✓</span>
    </div>
  );
}
