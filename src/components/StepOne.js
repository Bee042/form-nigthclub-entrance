import React, { useState } from "react";
import StepIndicator from "./elements/StepIndicator";
import NextBtn from "./elements/NextBtn";
import InputField from "./inputs/InputField";
import SelectField from "./inputs/SelectField";

/**
 * StepOne component to render the first step of the form.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.name - The name input value.
 * @param {Function} props.setName - Function to update the name value.
 * @param {string} props.gender - The selected gender.
 * @param {Function} props.setGender - Function to update the gender value.
 * @param {Function} props.changeStep - Function to change the step in the form.
 * @returns {JSX.Element} The rendered step one of the form.
 */

function StepOne({ name, setName, gender, setGender, changeStep }) {
  const [error, setError] = useState({});


  /**
   * Validate form fields for the current step.
   * @returns {boolean} Whether the form is valid or not.
   */
  const formValidation = () => {
    let isValid = true;
    let newError = {};

    // Validate name: must be between 2-20 characters and contain only allowed characters
    if (name.trim().length < 2) {
      newError.name = "Saisis au moins 2 caractères";
      isValid = false;
    } else if (name.trim().length > 20) {
      newError.name = "Ton nom ne peut pas faire plus de 20 caractères";
      isValid = false;
    } else if (!/^[a-zA-ZÀ-ÿ '-]+$/.test(name)) {
      newError.name = "Le nom ne peut pas contenir de caractères spéciaux";
      isValid = false;
    }

    // Validate gender: must be selected
    if (!gender) {
      newError.gender = "Sélectionne un genre";
      isValid = false;
    }

    setError(newError); // Update errors
    return isValid; // Return if form is valid
  };

  return (
    <div className="form-container">
      <InputField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Nom"
        error={error.name}
        placeholder="Saisis ton prénom"
      />

      <SelectField
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        label="Genre"
        error={error.gender}
        options={[
          { value: "female", label: "Féminin" },
          { value: "male", label: "Masculin" },
        ]}
      />

      <NextBtn
        onClick={(e) => {
          e.preventDefault();
          if (formValidation()) {
            changeStep(1);
          }
        }}
      />

      <StepIndicator currentStep={0} style={{ marginTop: "20px" }} />
    </div>
  );
}

export default StepOne;
