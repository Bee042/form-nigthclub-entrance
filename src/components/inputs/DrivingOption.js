import React from "react";

/**
 * DrivingOption component to render radio buttons for driving options.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.driving - Current driving state (true for "Yes", false for "No").
 * @param {Function} props.onChange - Function to handle driving state change.
 * @returns {JSX.Element} The rendered radio buttons for driving options.
 */
function DrivingOption({ driving, onChange }) {
  return (
    <div className="radio-input">
      <label>
        <input
          className="input"
          type="radio"
          name="driving"
          checked={driving}
          onChange={() => onChange(true)}
        />
        Oui
      </label>

      <label>
        <input
          className="input"
          type="radio"
          name="driving"
          checked={!driving}
          onChange={() => onChange(false)}
        />
        Non
      </label>
    </div>
  );
}

export default DrivingOption;
