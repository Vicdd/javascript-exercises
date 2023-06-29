const sumAll = function(start, end) {
    let sum = 0;

    if (typeof end != "number" || start < 0) {
        return 'ERROR';
    }

    // If start is bigger than end, then swap both
    start > end ? [start, end] = [end, start] : null;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
