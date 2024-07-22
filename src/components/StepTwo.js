import React, { useState } from "react";
import PrevBtn from "./elements/PrevBtn";
import SendBtn from "./elements/SendBtn";
import StepIndicator from "./elements/StepIndicator";
import AgeInput from "./inputs/AgeInput";
import DrivingOption from "./inputs/DrivingOption";

/**
 * StepTwo component for handling the second step of the form.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.age - Age input value.
 * @param {Function} props.setAge - Function to set the age value.
 * @param {boolean} props.driving - Driving option value.
 * @param {Function} props.setDriving - Function to set the driving option value.
 * @param {Function} props.changeStep - Function to change the step.
 * @param {Function} props.handleSubmit - Function to handle form submission.
 * @returns {JSX.Element} The rendered step two of the form.
 */

function StepTwo({
  age,
  setAge,
  driving,
  setDriving,
  changeStep,
  handleSubmit,
}) {
  const [error, setError] = useState({});

  /**
   * Validate form fields.
   * @returns {boolean} Whether the form is valid or not.
   */
  const formValidation = () => {
    let isValid = true;
    let newError = {};

    setError(newError); // Update errors
    return isValid; // Return if form is valid
  };

  return (
    <>
      <div className="form-container">
        <PrevBtn
          onClick={() => {
            if (formValidation()) {
              changeStep(-1);
            }
          }}
        />

        <AgeInput
          value={age}
          onChange={(e) => setAge(e.target.value)}
          error={error.age}
        />

        <br />
        <p>Est-ce que tu conduis ce soir ?</p>
        <DrivingOption driving={driving} onChange={setDriving} />
        <br />

        <div className="btn-container">
          <SendBtn
            onClick={(e) => {
              e.preventDefault();
              if (formValidation()) {
                handleSubmit(e);
              }
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <StepIndicator currentStep={1} />
      </div>
    </>
  );
}

export default StepTwo;
