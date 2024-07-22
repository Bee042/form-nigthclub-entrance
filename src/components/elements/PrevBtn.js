import React from "react";

/**
 * ArrowIcon component renders an SVG arrow with the specified class.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.className - Additional class names to apply to the arrow container.
 * @returns {JSX.Element} The rendered SVG arrow icon.
 */
const ArrowIcon = ({ className }) => (
  <span className={`prev-arrow ${className}`}>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
    </svg>
  </span>
);


/**
 * NextBtn component renders a button with arrow icons for navigation.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onClick - Function to handle button click events.
 * @returns {JSX.Element} The rendered navigation button with arrow icons.
 */
const NextBtn = ({ onClick }) => {
  return (
    <div className="prevBtn-wrapper">
      <div className="prevBtn-container">

        <button className="prev-btn" id="prevBtn" onClick={onClick}>
          Previous
        </button>

        <ArrowIcon className="first" />
        <ArrowIcon className="second" />
        <ArrowIcon className="third" />
      </div>
    </div>
  );
};

export default NextBtn;
