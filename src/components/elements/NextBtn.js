import React from "react";

/**
 * NextBtn component to render a 'Next' button with animated arrows.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.onClick - Function to handle button click.
 * @returns {JSX.Element} The rendered 'Next' button with animated arrows.
 */

const NextBtn = ({ onClick }) => {
  return (
    <div className="btn-wrapper">
      <div className="nextBtn-container">

        <button className="next-btn" onClick={onClick}>
          Suivant
        </button>

        {[...Array(3)].map((_, index) => (
          <span className={`arrow ${index === 0 ? 'first' : index === 1 ? 'second' : 'third'}`} key={index}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </span>
        ))}
        
      </div>
    </div>
  );
};

export default NextBtn;
