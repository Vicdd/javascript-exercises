const palindromes = function (str) {
    str = str.replace(/[^\w]+/g, '').toLowerCase();

    for (let i = 0, n = str.length; i < n; i++) {
        if (str[i] != str[n - i - 1]) return false;
    }
    
    return true;
};

// Do not edit below this line
module.exports = palindromes;
