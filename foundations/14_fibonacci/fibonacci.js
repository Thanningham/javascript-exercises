const fibonacci = function(nthFibb) {
    
    if (nthFibb < 0) return `OOPS`;
    if (nthFibb == 0) return 0;

    let previous = 0;
    let current = 1;
    
    for(let i = 2; i <= nthFibb; i++) {
        let next = previous + current;
        previous = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
