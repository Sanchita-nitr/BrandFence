import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function EditThreatForm({ threat, onSubmit, onClose }) {
  const [indicators, setIndicators] = useState([
    "Brand Name",
    "Logo matched",
  ]);

  const [indicatorInput, setIndicatorInput] = useState("");

  const [formData, setFormData] = useState({
    keywords: "",
    threatSource: "",
    company: "",
    severity: "",
    collectedBy: "",
    ruleReference: "",
  });

  useEffect(() => {
    if (threat) {
      setFormData((prev) => ({
        ...prev,
        company: threat.source || "",
      }));
    }
  }, [threat]);

  const addIndicator = (e) => {
    if (e.key === "Enter" && indicatorInput.trim()) {
      setIndicators([...indicators, indicatorInput.trim()]);
      setIndicatorInput("");
      e.preventDefault();
    }
  };

  const removeIndicator = (value) => {
    setIndicators(indicators.filter((i) => i !== value));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, indicators });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={18} />
        </button>
        <h2 className="text-lg font-semibold mb-6">
          Threat Information Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4 ">
            <Field
              className="bg-[#F5F5F5]"
              label="Keywords"
              placeholder="Enter the Keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
            />

            <Select
              label="Threat Source"
              name="threatSource"
              value={formData.threatSource}
              onChange={handleChange}
              placeholder="Select Threat Source"
            />

            <Field
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />

            <Select
              label="Threat Severity (Optional)"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              placeholder="Select Threat Severity"
            />

            <Select
              label="Collected By (Optional)"
              name="collectedBy"
              value={formData.collectedBy}
              onChange={handleChange}
              placeholder="Select Collected By"
            />

            <Field
              label="Rule Reference"
              placeholder="Enter the Reference"
              name="ruleReference"
              value={formData.ruleReference}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              Indicator
              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center">
                i
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-2 border rounded-lg px-3 py-2">
              {indicators.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => removeIndicator(item)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    ×
                  </button>
                </span>
              ))}

              <input
                value={indicatorInput}
                onChange={(e) => setIndicatorInput(e.target.value)}
                onKeyDown={addIndicator}
                placeholder="Add your Indicator"
                className="flex-1 min-w-[140px] outline-none text-sm py-1"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="px-24 py-3 bg-[#1E64C8] text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Add Organization
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Select({ label, placeholder, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <select
        {...props}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">{placeholder}</option>
        <option value="internal">Internal</option>
        <option value="external">External</option>
      </select>
    </div>
  );
}
