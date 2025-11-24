import React from "react";
import { useFormContext } from "../context/FormContext";
import { CheckCircle, Dot } from "lucide-react";
import { clsx } from "clsx";

const steps = [
  { id: 1, label: "Basics", description: "Title, Type & Mode" },
  { id: 2, label: "Rewards", description: "Amount, Timeline & Impact" },
  { id: 3, label: "Backer", description: "Sponsor & Terms" },
];

const Sidebar = () => {
  const { currentStep } = useFormContext();

  return (
    <div className="hidden lg:flex w-70  flex-col p-8 bg-[#F7F7F7] ">
      <div className="mb-7">
        <h3 className="text-sm uppercase bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent">
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
            <div key={step.id} className="flex items-start  bg-[#F7F7F7] relative">
              <div
                className={clsx(
                  "w-8 h-8  flex items-center justify-center  transition-all duration-300 z-10",
                  isActive ? " text-blue-500 " : " text-gray-400"
                )}
              >
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6" />
                ) : isActive ? (
                  <span className="text-md font-bold">{step.id}.</span>
                ) : (
                  <span className="text-sm font-bold">{step.id}.</span>
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
