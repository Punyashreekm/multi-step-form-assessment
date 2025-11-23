import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

const initialData = {
  // Step 1
  bountyTitle: "",
  bountyDescription: "",
  bountyType: "",
  dominantImpactCore: "",
  bountyMode: "Digital",
  location: "",

  // Step 2
  currency: "USD",
  totalReward: "",
  numberOfWinners: 1,
  expirationDate: "",
  estDays: "",
  estHours: "",
  estMinutes: "",
  hasImpactCertificate: false,
  impactBrief: "",
  sdgs: [],

  // Step 3
  hasBacker: false,
  backerName: "",
  backerLogo: null,
  backerMessage: "",
  termsAccepted: false,
};

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error for the field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const updateFormData = (updates) => {
    setFormData((prev) => ({
      ...prev,
      ...updates,
    }));
    
    // Clear errors for updated fields
    const updatedFields = Object.keys(updates);
    const hasErrorsToClear = updatedFields.some(field => errors[field]);
    
    if (hasErrorsToClear) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        updatedFields.forEach(field => delete newErrors[field]);
        return newErrors;
      });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.bountyTitle.trim()) newErrors.bountyTitle = "Bounty Title is required";
    else if (formData.bountyTitle.length > 40) newErrors.bountyTitle = "Max 40 characters";
    
    if (!formData.bountyDescription.trim()) newErrors.bountyDescription = "Description is required";
    if (!formData.bountyType) newErrors.bountyType = "Bounty Type is required";
    if (!formData.dominantImpactCore) newErrors.dominantImpactCore = "Dominant Impact Core is required";
    
    if (formData.bountyMode === "Physical" && !formData.location.trim()) {
      newErrors.location = "Location is required for Physical mode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.totalReward || Number(formData.totalReward) <= 0) {
      newErrors.totalReward = "Reward amount must be greater than 0";
    }
    if (!formData.numberOfWinners || Number(formData.numberOfWinners) < 1) {
      newErrors.numberOfWinners = "At least 1 winner required";
    }
    if (!formData.expirationDate) {
      newErrors.expirationDate = "Expiration date is required";
    }
    
    if (formData.hasImpactCertificate && !formData.impactBrief.trim()) {
      newErrors.impactBrief = "Impact Brief is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (formData.hasBacker) {
      if (!formData.backerName.trim()) newErrors.backerName = "Backer Name is required";
      if (!formData.backerLogo) newErrors.backerLogo = "Backer Logo is required";
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    let isValid = false;
    if (currentStep === 1) isValid = validateStep1();
    if (currentStep === 2) isValid = validateStep2();
    
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        errors,
        currentStep,
        handleFormChange,
        updateFormData,
        nextStep,
        prevStep,
        validateStep3, // Exposed for final submission check
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
