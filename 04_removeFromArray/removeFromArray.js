function getAllIndexes(array, element) {
    let indexes  = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            indexes.push(i);
        }
    }

    return indexes;
}

function removeElement(array, indexes) {
    for (let i = 0; i < indexes.length; i++) {
        array.splice(indexes[i], 1);
    }

    return array;
}

const removeFromArray = function(...args) {
    let array = args[0];
    for (let i = 1; i < args.length; i++) {
        indexes = getAllIndexes(array, args[i])
        array = removeElement(array, indexes);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
