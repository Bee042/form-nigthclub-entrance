import React from "react";

/**
 * SelectField component to render a labeled select dropdown with error handling.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.value - Selected value of the select dropdown.
 * @param {Function} props.onChange - Function to handle value changes.
 * @param {string} props.label - Label text for the select field.
 * @param {string} props.error - Error message to display, if any.
 * @param {Array} props.options - Array of options to populate the select dropdown.
 * @returns {JSX.Element} The rendered select dropdown with label and error message.
 */
function SelectField({ value, onChange, label, error, options }) {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <select
        value={value}
        onChange={onChange}
        style={{ borderColor: error ? "#d431ff" : "white" }}
      >
        <option value="" disabled>Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default SelectField;
