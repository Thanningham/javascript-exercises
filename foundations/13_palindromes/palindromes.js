const palindromes = function (string) {
    string = string.toLowerCase();
    let formattedString = ""
    let reverseString = "";

    for (let i = 0; i < string.length; i++) {
        if (/^[a-z0-9]$/i.test(string[i])) {
            formattedString += string[i];
        }
    }

    for (let i = formattedString.length - 1; i >= 0; i--) {
        reverseString += formattedString[i];
    }

    return reverseString === formattedString;
};

// Do not edit below this line
module.exports = palindromes;
