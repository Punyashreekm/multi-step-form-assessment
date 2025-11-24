import React, { useState } from "react";
import { useFormContext } from "../../context/FormContext";
import { Calendar, Clock, DollarSign, Users, Award, ChevronDown, Check } from "lucide-react";
import { clsx } from "clsx";

const SDG_OPTIONS = [
  "No Poverty",
  "Zero Hunger",
  "Good Health",
  "Quality Education",
  "Gender Equality",
  "Clean Water",
  "Affordable Energy",
  "Decent Work",
  "Industry & Innovation",
  "Reduced Inequalities",
  "Sustainable Cities",
  "Responsible Consumption",
  "Climate Action",
  "Life Below Water",
  "Life On Land",
];

const StepTwo = () => {
  const { formData, errors, handleFormChange, updateFormData } = useFormContext();
  const [sdgOpen, setSdgOpen] = useState(false);

  const toggleSdg = (option) => {
    const current = formData.sdgs || [];
    const exists = current.includes(option);
    const next = exists ? current.filter((s) => s !== option) : [...current, option];
    handleFormChange("sdgs", next);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-[#F7F7F7]">
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Rewards & Timeline</h2>
      <p className="text-slate-500 mb-8">Define the incentives and schedule for your bounty.</p>

      <div className="space-y-8">
        {/* Reward Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-800 border-b pb-2">
            <DollarSign className="w-5 h-5 text-blue-500" />
            <h3>Reward Details</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Currency</label>
              <select
                value={formData.currency}
                onChange={(e) => handleFormChange("currency", e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
              >
                {["USD", "EUR", "INR", "GBP", "AUD", "CAD"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Total Reward Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={formData.totalReward}
                onChange={(e) => handleFormChange("totalReward", e.target.value)}
                className={clsx(
                  "w-full px-4 py-2.5 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
                  errors.totalReward ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
                )}
                placeholder="0.00"
              />
              {errors.totalReward && <p className="text-xs text-red-500 mt-1">{errors.totalReward}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Number of Winners <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                value={formData.numberOfWinners}
                onChange={(e) => handleFormChange("numberOfWinners", e.target.value)}
                className={clsx(
                  "w-full pl-10 pr-4 py-2.5 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
                  errors.numberOfWinners
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-blue-500"
                )}
              />
              <Users className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            </div>
            {errors.numberOfWinners && <p className="text-xs text-red-500 mt-1">{errors.numberOfWinners}</p>}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-800 border-b pb-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <h3>Timeline</h3>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Expiration Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.expirationDate}
                onChange={(e) => handleFormChange("expirationDate", e.target.value)}
                className={clsx(
                  "w-full pl-10 pr-4 py-2.5 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
                  errors.expirationDate
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-blue-500"
                )}
              />
              <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            {errors.expirationDate && <p className="text-xs text-red-500 mt-1">{errors.expirationDate}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Completion Time</label>
            <div className="grid grid-cols-3 gap-4">
              {["Days", "Hours", "Minutes"].map((unit) => (
                <div key={unit}>
                  <input
                    type="number"
                    min="0"
                    value={formData[`est${unit}`]}
                    onChange={(e) => handleFormChange(`est${unit}`, e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-center"
                    placeholder="0"
                  />
                  <p className="text-xs text-center text-slate-500 mt-1">{unit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & SDGs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-800 border-b pb-2">
            <Award className="w-5 h-5 text-blue-500" />
            <h3>Impact & Goals</h3>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                className={clsx(
                  "w-6 h-6 rounded border flex items-center justify-center transition-colors",
                  formData.hasImpactCertificate ? "bg-blue-500 border-blue-500" : "bg-white border-slate-300"
                )}
              >
                {formData.hasImpactCertificate && <Check className="w-4 h-4 text-white" />}
              </div>
              <input
                type="checkbox"
                checked={!!formData.hasImpactCertificate}
                onChange={(e) => {
                  const checked = e.target.checked;
                  if (checked) {
                    handleFormChange("hasImpactCertificate", true);
                  } else {
                    updateFormData({ hasImpactCertificate: false, impactBrief: "" });
                  }
                }}
                className="sr-only"
              />
              <span className="font-medium text-slate-700">Has Impact Certificate?</span>
            </label>

            {formData.hasImpactCertificate && (
              <div className="mt-4 animate-in fade-in slide-in-from-top-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Impact Brief <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.impactBrief}
                  onChange={(e) => handleFormChange("impactBrief", e.target.value)}
                  className={clsx(
                    "w-full px-4 py-2.5 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
                    errors.impactBrief
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-200 focus:border-blue-500"
                  )}
                  placeholder="Briefly describe the impact..."
                />
                {errors.impactBrief && <p className="text-xs text-red-500 mt-1">{errors.impactBrief}</p>}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Sustainable Development Goals (SDGs)
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setSdgOpen(!sdgOpen)}
                className="w-full text-left px-4 py-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between hover:border-blue-400 transition-colors"
              >
                <span className={clsx("block truncate", !formData.sdgs?.length && "text-slate-400")}>
                  {formData.sdgs?.length > 0 ? `${formData.sdgs.length} selected` : "Select SDGs"}
                </span>
                <ChevronDown className={clsx("w-4 h-4 text-slate-400 transition-transform", sdgOpen && "rotate-180")} />
              </button>

              {sdgOpen && (
                <div className="absolute z-20 mt-2 w-full max-h-60 overflow-auto rounded-xl border border-slate-200 bg-white shadow-xl p-2">
                  {SDG_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
                    >
                      <div
                        className={clsx(
                          "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                          formData.sdgs?.includes(opt) ? "bg-blue-500 border-blue-500" : "bg-white border-slate-300"
                        )}
                      >
                        {formData.sdgs?.includes(opt) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <input
                        type="checkbox"
                        checked={formData.sdgs?.includes(opt)}
                        onChange={() => toggleSdg(opt)}
                        className="sr-only"
                      />
                      <span className="text-sm text-slate-700">{opt}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            {formData.sdgs?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.sdgs.map((sdg) => (
                  <span
                    key={sdg}
                    className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                  >
                    {sdg}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StepTwo;
