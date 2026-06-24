const sumAll = function(a , b) {
    let startingNum;
    let endingNum;
    if (a < b) {
        startingNum = a;
        endingNum = b;
    } else {
        startingNum = b;
        endingNum = a;
    }
    if (!Number.isInteger(startingNum) || 
        !Number.isInteger(endingNum) ||
        startingNum < 0 ||
        endingNum < 0) {
        return "ERROR";
    }

    let total = 0;
    for (let i = startingNum; i <= endingNum; i++) {
        total += i
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
