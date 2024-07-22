/**
 * Function to determine if a user is authorized and calculate the entry price.
 * 
 * @param {number|string} age - The user's age. Can be a string or a number.
 * @param {string} gender - The user's gender ('male' or 'female').
 * @param {boolean} driving - Indicates if the user is driving or not.
 * @returns {Object} - An object containing `authorized` and `price`.
 */

function HandleForm(age, gender, driving) {
    let authorized = false;
    let price = 0;

    // Convert age to a number
    const ageNumber = Number(age);

    // Check if age is a valid number and non-negative
    if (isNaN(ageNumber) || ageNumber < 0) {
        console.error("Age must be a valid non-negative number.");
        return { authorized, price };
    }

    // Check if gender is valid
    if (gender !== 'male' && gender !== 'female') {
        console.error("Gender must be 'male' or 'female'.");
        return { authorized, price };
    }

    // Logic to determine authorization and price
    if (ageNumber >= 18) {
        if (gender === 'female') {
            authorized = true;
            price = 0; // Price for females
        } else if (gender === 'male') {
            if (ageNumber <= 20) {
                authorized = true;
                price = 10; // Price for males aged 20 or younger
            } else {
                authorized = true;
                price = 15; // Price for males older than 20
            }
        }
    }

    return { authorized, price };
}

export default HandleForm;
