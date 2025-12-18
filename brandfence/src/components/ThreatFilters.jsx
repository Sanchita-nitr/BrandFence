import { X } from "lucide-react";

export default function ThreatFiltersModal({ onClose, onApply }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-5 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="space-y-4">
          <Section
            title="Severity"
            action={<ActionLink text="Select all" />}
          >
            <div className="flex flex-wrap gap-3">
              <Checkbox label="Critical" />
              <Checkbox label="High" />
              <Checkbox label="Medium" />
              <Checkbox label="Low" />
            </div>
          </Section>

          <Section title="Threat Type">
            <Select placeholder="Select Threat Source" />
          </Section>

          <Section title="Threat Source">
            <Select placeholder="Select Threat Source" />
          </Section>
          <Section
            title="Threat Filter"
            action={<ActionLink text="Select all" />}
          >
            <div className="flex flex-col gap-3">
              <Checkbox label="Book Marked Threats" />
              <Checkbox label="Automatically Filtered Threats" />
            </div>
          </Section>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <button className="text-gray-500 hover:text-gray-700 text-sm">
            Clear All
          </button>

          <button
            onClick={onApply}
            className="px-6 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 font-medium"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, action, children }) {
  return (
    <div className="border rounded-xl p-4">
      <div className="flex items-center justify-between mb-3 ">
        <p className="font-medium text-sm">{title}</p>
        {action}
      </div>
      {children}
    </div>
  );
}

function ActionLink({ text }) {
  return (
    <button className="text-blue-600 text-sm hover:underline">
      {text}
    </button>
  );
}

function Checkbox({ label }) {
  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      {label}
    </label>
  );
}

function Select({ placeholder }) {
  return (
    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
      <option>{placeholder}</option>
    </select>
  );
}
