import React from "react";
import { useFormContext } from "../context/FormContext";
import { CheckCircle, Circle, Dot } from "lucide-react";
import { clsx } from "clsx";

const steps = [
  { id: 1, label: "Basics", description: "Title, Type & Mode" },
  { id: 2, label: "Rewards", description: "Amount, Timeline & Impact" },
  { id: 3, label: "Backer", description: "Sponsor & Terms" },
];

const Sidebar = () => {
  const { currentStep } = useFormContext();

  return (
    <div className="hidden lg:flex w-80  flex-col p-8 shadow-2xl">
      <div className="mb-12">
        <h3 className="text-md uppercase bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent">
          Bounty Steps
        </h3>
      </div>

      <div className="space-y-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-800 -z-10" />

        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className="flex items-start gap-4 relative">
              <div
                className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center border-1 transition-all duration-300 z-10",
                  isActive
                    ? "border-blue-500 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    : isCompleted
                    ? "border-green-500 text-green-500 bg-green-500/10"
                    : "border-slate-700 text-slate-700"
                )}
              >
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5" />
                ) : isActive ? (
                  <Dot className="w-8 h-8" />
                ) : (
                  <span className="text-sm font-medium">{step.id}</span>
                )}
              </div>
              <div className={clsx("transition-opacity duration-300", isActive ? "opacity-100" : "opacity-60")}>
                <h3
                  className={clsx(
                    "text-bold  font-semibold  tracking-wider",
                    isActive ? "text-blue-500" : "text-slate-400"
                  )}
                >
                  {step.label}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
