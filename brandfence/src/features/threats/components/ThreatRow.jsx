import { BsBookmark, BsPlusSquare, BsTrash } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const severityConfig = {
  low: { label: "Low", bar: "bg-[#7FE47E]", dot: "bg-[#7FE47E]" },
  medium: { label: "Medium", bar: "bg-[#F5C710]", dot: "bg-[#F5C710]" },
  high: { label: "High", bar: "bg-[#FCB5C3]", dot: "bg-[#FCB5C3]" },
  critical: { label: "Critical", bar: "bg-[#FF718B]", dot: "bg-[#FF718B]" },
};

export default function ThreatRow({ threat, selected, onClick }) {
  const severity = severityConfig[threat.severity];

  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        checked={threat === selected}
        readOnly
        onClick={() => onClick(threat)}
        className="mt-2"
      />

      <div
        onClick={onClick}
        className="relative flex-1 flex items-start gap-3 rounded-xl bg-[#EBEBEB] p-4 shadow-sm cursor-pointer border border-gray-200 hover:border-blue-200 hover:bg-[#f8f8fa] hover:shadow-sm hover:shadow-[#1E64C88F] transition"
      >
        <div
          className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${severity.bar}`}
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              <span className="font-semibold text-gray-900">{threat.name}</span>{" "}
              <span className="text-gray-600">
                from {threat.source} found on {threat.foundOn}
              </span>
            </p>

            <span className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium">
              {threat.threatType}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-sm ${severity.dot}`} />
              <span className="font-medium">{severity.label}</span>
            </div>

            <span>{threat.date}</span>

            <FaFacebookF className="text-[#2196F3] text-lg" />
          </div>
        </div>

        <div className="flex items-center gap-4 text-blue-600 hover:text-blue-800 mt-1">
          <BsBookmark className="text-xl" />
          <BsPlusSquare className="text-xl" />
          <BsTrash className="text-xl" />
        </div>
      </div>
    </div>
  );
}
