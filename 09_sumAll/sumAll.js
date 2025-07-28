const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0)
        return "ERROR";
    return (Math.abs(b - a) + 1) * (a + b) / 2;
};

// Do not edit below this line
module.exports = sumAll;
