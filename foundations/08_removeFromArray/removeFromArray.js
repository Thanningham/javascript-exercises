const removeFromArray = function(arr, ...elemToRemove) {
    let finalArr = arr.slice();
    for (const elem of elemToRemove) {
        finalArr = finalArr.filter((item) => item !== elem)
    }
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
