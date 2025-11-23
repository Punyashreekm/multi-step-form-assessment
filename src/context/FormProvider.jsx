import React, { useState } from "react";
import { FormContext } from "./FormContext";

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    bountyTitle: "",
    bountyDescription: "",
    bountyType: "",
    dominantImpactCore: "",
    bountyMode: "Digital",
    location: "",
  });

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return <FormContext.Provider value={{ formData, handleFormChange }}>{children}</FormContext.Provider>;
};

export default FormProvider;
