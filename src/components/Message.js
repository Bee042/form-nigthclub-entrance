import React from "react";
import '../css/message.css';

/**
 * Message component displays the result of the form submission, including error messages
 * or a success message based on the authorization and input values.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.result - Result object containing authorization and price information.
 * @param {boolean} props.result.authorized - Whether the user is authorized or not.
 * @param {string} props.result.price - Price of the entry.
 * @param {Object} props.result.errors - Object containing error messages for each field.
 * @param {string} props.name - Name of the user.
 * @param {string} props.gender - Gender of the user ('male' or 'female').
 * @param {string} props.age - Age of the user.
 * @param {boolean} props.driving - Whether the user is driving or not.
 * @returns {JSX.Element} The rendered message component based on the form result.
 */

function Message({ result, name, gender, age, driving }) {
  // Ensure result.errors is always an object
  const { authorized, price, errors = {} } = result;

  // Determine class for the name based on gender
  const nameClass = gender === "female" ? "female-name" : "male-name";

  return (
    <div className="form-container message-container">
      {Object.keys(errors).length > 0 ? (
        <div>
          {errors.name && <p className="error-message">{errors.name}</p>}
          {errors.gender && <p className="error-message">{errors.gender}</p>}
          {errors.age && <p className="error-message">{errors.age}</p>}
        </div>
      ) : (
        <div>
          {authorized ? (
            <div className="welcome-message">
              <p className="welcome">Bienvenue <span className={nameClass}>{name}</span> !</p>
              {price === 0 ? (
                <p>L'entrée est <span className="price-message">gratuite</span> pour les femmes</p>
              ) : (
                <p>Le prix de l'entrée est de <span className="price-message">{price}€</span></p>
              )}
              {driving && (
                <p>
                  Tu conduis : récupère ton <span className="free-soft">soft gratuit</span> au bar!
                </p>
              )}
            </div>
          ) : (
            <p>Désolé <span className={nameClass}>{name}</span>, tu es trop jeune pour entrer ici</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Message;
