import React from "react";
import { useFormContext } from "../../context/FormContext";
import { MapPin, Globe, Layout, Target, Zap, Droplets, Leaf, Users } from "lucide-react";
import { clsx } from "clsx";

const StepOne = () => {
  const { formData, errors, handleFormChange, updateFormData } = useFormContext();

  const impactCores = [
    { id: "Water", icon: Droplets, color: "text-blue-500" },
    { id: "Earth", icon: Leaf, color: "text-green-500" },
    { id: "Social", icon: Users, color: "text-purple-500" },
    { id: "Energy", icon: Zap, color: "text-yellow-500" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Basic Details</h2>
      <p className="text-slate-500 mb-8">Let's start with the core information about your bounty.</p>

      <div className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Bounty Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.bountyTitle}
            onChange={(e) => handleFormChange("bountyTitle", e.target.value)}
            className={clsx(
              "w-full px-4 py-2.5 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
              errors.bountyTitle ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            )}
            placeholder="e.g., Redesign the User Dashboard"
          />
          {errors.bountyTitle && <p className="text-xs text-red-500 mt-1">{errors.bountyTitle}</p>}
          <p className="text-xs text-slate-400 mt-1 text-right">{formData.bountyTitle.length}/40</p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.bountyDescription}
            onChange={(e) => handleFormChange("bountyDescription", e.target.value)}
            rows={4}
            className={clsx(
              "w-full px-4 py-2.5 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none",
              errors.bountyDescription ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
            )}
            placeholder="Describe what needs to be done..."
          />
          {errors.bountyDescription && <p className="text-xs text-red-500 mt-1">{errors.bountyDescription}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Bounty Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                value={formData.bountyType}
                onChange={(e) => handleFormChange("bountyType", e.target.value)}
                className={clsx(
                  "w-full px-4 py-2.5 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none appearance-none",
                  errors.bountyType ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
                )}
              >
                <option value="">Select Type</option>
                <option value="Content">Content Creation</option>
                <option value="Design">Design & UI/UX</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Other">Other</option>
              </select>
              <Layout className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            {errors.bountyType && <p className="text-xs text-red-500 mt-1">{errors.bountyType}</p>}
          </div>

          {/* Dominant Core */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Dominant Impact Core <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {impactCores.map((core) => (
                <button
                  key={core.id}
                  type="button"
                  onClick={() => handleFormChange("dominantImpactCore", core.id)}
                  className={clsx(
                    "flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-sm",
                    formData.dominantImpactCore === core.id
                      ? "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500"
                      : "border-slate-200 hover:border-slate-300 text-slate-600"
                  )}
                >
                  <core.icon className={clsx("w-4 h-4", core.color)} />
                  {core.id}
                </button>
              ))}
            </div>
            {errors.dominantImpactCore && <p className="text-xs text-red-500 mt-1">{errors.dominantImpactCore}</p>}
          </div>
        </div>

        {/* Mode */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Bounty Mode</label>
          <div className="flex gap-4">
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="mode"
                value="Digital"
                checked={formData.bountyMode === "Digital"}
                onChange={() => updateFormData({ bountyMode: "Digital", location: "" })}
                className="peer sr-only"
              />
              <div className="flex flex-col items-center p-4 rounded-xl border-2 border-slate-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all hover:bg-slate-50">
                <Globe className="w-6 h-6 mb-2 text-slate-500 peer-checked:text-blue-500" />
                <span className="font-medium text-slate-700 peer-checked:text-blue-700">Digital</span>
              </div>
            </label>

            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="mode"
                value="Physical"
                checked={formData.bountyMode === "Physical"}
                onChange={() => handleFormChange("bountyMode", "Physical")}
                className="peer sr-only"
              />
              <div className="flex flex-col items-center p-4 rounded-xl border-2 border-slate-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all hover:bg-slate-50">
                <MapPin className="w-6 h-6 mb-2 text-slate-500 peer-checked:text-blue-500" />
                <span className="font-medium text-slate-700 peer-checked:text-blue-700">Physical</span>
              </div>
            </label>
          </div>
        </div>

        {/* Location (Conditional) */}
        {formData.bountyMode === "Physical" && (
          <div className="animate-in fade-in slide-in-from-top-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleFormChange("location", e.target.value)}
                className={clsx(
                  "w-full pl-10 pr-4 py-2.5 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
                  errors.location ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
                )}
                placeholder="e.g., New York, USA"
              />
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            </div>
            {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepOne;
