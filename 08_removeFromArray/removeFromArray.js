const removeFromArray = function(arr, ...num) {
    const args = Array.from(num);
    return arr.filter((item) => !args.includes(item)); 
};

// Do not edit below this line
module.exports = removeFromArray;
