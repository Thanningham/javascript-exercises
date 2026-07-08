const findTheOldest = function(peopleArr) {
    const currentYear = new Date().getFullYear();
    
    const age = peopleObj => (peopleObj.yearOfDeath ?? currentYear) - peopleObj.yearOfBirth;

    let oldest = peopleArr[0];

    for (const person of peopleArr) {
        if (age(person) > age(oldest)) {
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
