import React from "react";

/**
 * AgeInput component to render an input field for age with error handling.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.value - Value of the input field.
 * @param {Function} props.onChange - Function to handle value change.
 * @param {string} props.error - Error message to display.
 * @returns {JSX.Element} The rendered input field with error message.
 */
function AgeInput({ value, onChange, error }) {
  return (
    <div className="form-group">
      <label>Âge:</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        style={{ borderColor: error ? "#d431ff" : "white" }}
        required
      />
      {error && <p style={{ color: "#d431ff" }}>{error}</p>}
    </div>
  );
}

export default AgeInput;
