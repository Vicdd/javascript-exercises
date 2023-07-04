const getTheTitles = function (books) {
    let array = [];
    books.forEach(e => {
        array.push(e.title);
    });
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
