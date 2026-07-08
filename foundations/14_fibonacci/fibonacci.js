const fibonacci = function(currentTerm) {
    let fibbonaciArr = [0,1];
    
    if (currentTerm < 0) {
        return `OOPS`;
    }

    for(let i = 2; i <= currentTerm; i++) {
        fibbonaciArr.push(fibbonaciArr[i - 1] + fibbonaciArr[i - 2]);
    }

    return fibbonaciArr[currentTerm]
};

// Do not edit below this line
module.exports = fibonacci;
