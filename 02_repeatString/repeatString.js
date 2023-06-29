const repeatString = function(string, times) {
    let stringRepeated = '';

    if (times < 0) return 'ERROR';

    for (let i = 0; i < times; i++) {
        stringRepeated = stringRepeated.concat(string);
    }
    
    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
