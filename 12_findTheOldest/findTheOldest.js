const findTheOldest = function(people) {
    let oldest = 0;
    let person;

    people.forEach(e => {
        let yearOfDeath = e.yearOfDeath ?? 2023;
        if (yearOfDeath - e.yearOfBirth > oldest) {
            oldest = yearOfDeath - e.yearOfBirth;
            person = e;
        }
    });

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
