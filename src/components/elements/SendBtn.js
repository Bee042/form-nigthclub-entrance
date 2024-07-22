import React from "react";
import PropTypes from "prop-types";
import "../elements/SendBtn";

/**
 * SendBtn component to render a button for sending actions.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onClick - Function to handle button click events.
 * @returns {JSX.Element} The rendered send button.
 */

const SendBtn = ({ onClick }) => {
  return (
    <div className="send-btn-container">
      <button className="send-btn" type="button" onClick={onClick}>
        Send
      </button>
    </div>
  );
};

// Define prop types for the component
SendBtn.propTypes = {
  onClick: PropTypes.func.isRequired, // Function to handle button click, required
};

export default SendBtn;
