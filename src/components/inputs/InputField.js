import React from "react";

/**
 * InputField component to render a labeled input field with error handling.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.value - Value of the input field.
 * @param {Function} props.onChange - Function to handle value changes.
 * @param {string} props.label - Label text for the input field.
 * @param {string} props.error - Error message to display, if any.
 * @param {string} props.placeholder - Placeholder text for the input field.
 * @returns {JSX.Element} The rendered input field with label and error message.
 */
function InputField({ value, onChange, label, error, placeholder }) {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ borderColor: error ? "#d431ff" : "white" }}
        required
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default InputField;
