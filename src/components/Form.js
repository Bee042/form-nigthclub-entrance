import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import HandleForm from "../utils/HandleForm";
import Message from "./Message";
import '../css/buttons/buttonsImports.css';
import '../css/Form.css';

function Form() {
  // Form and input states
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [driving, setDriving] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState({ authorized: false, price: "" });
  const [step, setStep] = useState(0);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert age to a number
    const ageNumber = Number(age);

    // Process form data
    const { authorized, price, errors } = HandleForm(ageNumber, gender, driving);
    setResult({ authorized, price, errors });
    setSubmitted(true);
  };

  // Navigate between steps
  const changeStep = (n) => {
    setStep(currentStep => currentStep + n);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {!submitted && step === 0 && (
          <StepOne
            name={name}
            setName={setName}
            gender={gender}
            setGender={setGender}
            changeStep={changeStep}
          />
        )}

        {!submitted && step === 1 && (
          <StepTwo
            age={age}
            setAge={setAge}
            driving={driving}
            setDriving={setDriving}
            changeStep={changeStep}
            handleSubmit={handleSubmit}
          />
        )}

        {submitted && (
          <Message
            result={result}
            name={name}
            gender={gender}
            age={age}
            driving={driving}
          />
        )}
      </form>
    </div>
  );
}

export default Form;
