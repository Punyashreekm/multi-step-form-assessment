import React from "react";
import { useFormContext } from "../../context/FormContext";
import { Shield, Upload, Check } from "lucide-react";
import { clsx } from "clsx";

const StepThree = () => {
  const { formData, errors, handleFormChange, updateFormData } = useFormContext();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, we'd upload this. Here we just store the name or a fake URL.
      handleFormChange("backerLogo", file.name);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Backer Information</h2>
      <p className="text-slate-500 mb-8">Add sponsor details and review terms.</p>

      <div className="space-y-8">
        {/* Backer Toggle */}
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <label className="flex items-center gap-4 cursor-pointer">
            <div className={clsx(
              "w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out",
              formData.hasBacker ? "bg-blue-500" : "bg-slate-300"
            )}>
              <div className={clsx(
                "w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-300 ease-in-out",
                formData.hasBacker ? "translate-x-6" : "translate-x-0"
              )} />
            </div>
            <input
              type="checkbox"
              checked={formData.hasBacker}
              onChange={(e) => {
                const checked = e.target.checked;
                if (checked) {
                  handleFormChange("hasBacker", true);
                } else {
                  updateFormData({
                    hasBacker: false,
                    backerName: "",
                    backerLogo: null,
                    backerMessage: "",
                  });
                }
              }}
              className="sr-only"
            />
            <div>
              <span className="block font-medium text-slate-800">This bounty has a backer/sponsor</span>
              <span className="text-sm text-slate-500">Enable to add sponsor details</span>
            </div>
          </label>
        </div>

        {/* Backer Details (Conditional) */}
        {formData.hasBacker && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Backer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.backerName}
                onChange={(e) => handleFormChange("backerName", e.target.value)}
                className={clsx(
                  "w-full px-4 py-2.5 rounded-lg border bg-white focus:ring-2 focus:ring-blue-500/20 transition-all outline-none",
                  errors.backerName ? "border-red-300 focus:border-red-500" : "border-slate-200 focus:border-blue-500"
                )}
                placeholder="e.g. Acme Corp"
              />
              {errors.backerName && <p className="text-xs text-red-500 mt-1">{errors.backerName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Backer Logo <span className="text-red-500">*</span>
              </label>
              <div className={clsx(
                "relative border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center transition-colors",
                errors.backerLogo ? "border-red-300 bg-red-50" : "border-slate-300 hover:border-blue-400 hover:bg-blue-50"
              )}>
                <Upload className="w-8 h-8 text-slate-400 mb-2" />
                <p className="text-sm text-slate-600 mb-2">
                  {formData.backerLogo ? (
                    <span className="text-blue-600 font-medium">{formData.backerLogo}</span>
                  ) : (
                    "Click to upload or drag and drop"
                  )}
                </p>
                <p className="text-xs text-slate-400">SVG, PNG, JPG (max. 800x400px)</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              {errors.backerLogo && <p className="text-xs text-red-500 mt-1">{errors.backerLogo}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Backer Message</label>
              <textarea
                value={formData.backerMessage}
                onChange={(e) => handleFormChange("backerMessage", e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none"
                placeholder="A short message from the sponsor..."
              />
            </div>
          </div>
        )}

        {/* Terms & Conditions */}
        <div className="pt-6 border-t border-slate-200">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className={clsx(
              "mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0",
              formData.termsAccepted ? "bg-blue-500 border-blue-500" : "bg-white border-slate-300 group-hover:border-blue-400"
            )}>
              {formData.termsAccepted && <Check className="w-3.5 h-3.5 text-white" />}
            </div>
            <input
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={(e) => handleFormChange("termsAccepted", e.target.checked)}
              className="sr-only"
            />
            <div className="text-sm text-slate-600">
              I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and confirm that all information provided is accurate.
            </div>
          </label>
          {errors.termsAccepted && <p className="text-xs text-red-500 mt-2 ml-8">{errors.termsAccepted}</p>}
        </div>
      </div>
    </div>
  );
};

export default StepThree;
