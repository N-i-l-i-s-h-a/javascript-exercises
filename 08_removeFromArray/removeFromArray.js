const removeFromArray = function(arr, ...num) {
    const args = Array.from(num);
    return arr.filter(function remove(item){
        return !(args.includes(item));
    }); 
};

// Do not edit below this line
module.exports = removeFromArray;
