

export const validateStep1 = (formData) => {
  const errors = {};
  if (!formData.bountyTitle.trim()) {
    errors.bountyTitle = "Bounty Title is required";
  } else if (formData.bountyTitle.length > 40) {
    errors.bountyTitle = "Bounty Title must not exceed 40 characters";
  }
  if (!formData.bountyDescription.trim()) {
    errors.bountyDescription = "Bounty Description is required";
  }
  if (!formData.bountyType) {
    errors.bountyType = "Bounty Type is required";
  }
  if (!formData.dominantImpactCore) {
    errors.dominantImpactCore = "Dominant Impact Core is required";
  }
  if (formData.bountyMode === "Physical" && !formData.location.trim()) {
    errors.location = "Location is required for Physical mode";
  }
  return errors;
};

export const validateStep2 = (formData) => {
  const errors = {};
  // Add validation logic for Step 2
  return errors;
};

export const validateStep3 = (formData) => {
  const errors = {};
  // Add validation logic for Step 3
  return errors;
};
