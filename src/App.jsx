import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import FormProvider, { useFormContext } from "./context/FormContext";
import Sidebar from "./components/Sidebar";
import StepOne from "./components/steps/StepOne-Basics";
import StepTwo from "./components/steps/StepTwo-Rewards";
import StepThree from "./components/steps/StepThree-Backer";
import Result from "./components/Result";
import { Loader2 } from "lucide-react";

const Wizard = () => {
  const { currentStep, nextStep, prevStep, formData, validateStep3 } = useFormContext();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (validateStep3()) {
      setIsSubmitting(true);

      // Construct payload
      const payload = {
        title: formData.bountyTitle,
        description: formData.bountyDescription,
        type: formData.bountyType,
        dominant_core: formData.dominantImpactCore,
        mode: formData.bountyMode.toLowerCase(),
        location: formData.bountyMode === "Physical" ? formData.location : undefined,
        reward: {
          currency: formData.currency,
          amount: Number(formData.totalReward),
          winners: Number(formData.numberOfWinners),
        },
        timeline: {
          expiration_date: new Date(formData.expirationDate).toISOString(),
          estimated_completion: {
            days: Number(formData.estDays) || 0,
            hours: Number(formData.estHours) || 0,
            minutes: Number(formData.estMinutes) || 0,
          },
        },
        hasImpactCertificate: formData.hasImpactCertificate,
        impactBriefMessage: formData.hasImpactCertificate ? formData.impactBrief : undefined,
        has_backer: formData.hasBacker,
        backer: formData.hasBacker
          ? {
              name: formData.backerName,
              logo: formData.backerLogo, // Assuming URL or File object handling
              message: formData.backerMessage,
            }
          : undefined,
        terms_accepted: formData.termsAccepted,
      };

      // Simulate server request
      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/result", { state: { payload } });
      }, 2000);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F7F7F7] font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-3xl border border-gray-300 rounded-2xl shadow-xl p-8 min-h-[600px] flex flex-col">
          <div className="flex-1">
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
          </div>

          <div className="flex gap-4 justify-end mt-12 pt-6 border-t border-gray-100">
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-slate-700 font-medium rounded-lg transition shadow-sm"
                disabled={isSubmitting}
              >
                Back
              </button>
            )}

            {currentStep < 3 ? (
              <button
                onClick={nextStep}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Bounty"
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Wizard />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </FormProvider>
  );
};

export default App;
