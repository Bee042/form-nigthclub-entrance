import React from "react";
import "../elements/StepIndicator";

/**
 * StepIndicator component to render a series of step indicators.
 *
 * @param {Object} props - Component properties.
 * @param {number} props.currentStep - The index of the current active step.
 * @returns {JSX.Element} The rendered step indicators.
 */

function StepIndicator({ currentStep }) {
  
  // Define the steps to be displayed
  const steps = [1, 2];

  return (
    <div className="step-indicator">

      {steps.map((step, index) => (
        <span
          key={index}
          className={`step ${index === currentStep ? "active" : ""}`}
        />
      ))}

    </div>
  );
}

export default StepIndicator;
