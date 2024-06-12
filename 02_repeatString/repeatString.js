const repeatString = function(string, x) {
    let repeat = ''
    if (x<0) {
        return 'ERROR'
    }
    for (let i = 0; i < x; i++) {
        repeat += string
    }
    return repeat
};

// Do not edit below this line
module.exports = repeatString;
