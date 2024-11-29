var sumOfDigits1 = function(s) {
    let sum = 0;
    for (let char of s) {
        if (char >= '0' && char <= '9') {
            sum += parseInt(char);
        }
    }
    return sum;
};


var sumOfDigits2 = function(s) {
    return s.match(/\d/g)?.reduce((sum, digit) => sum + Number(digit), 0) || 0;
};


var sumOfDigits3 = function(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (code >= 48 && code <= 57) { // ASCII codes for '0' to '9'
            sum += code - 48; // Convert ASCII code to actual number
        }
    }
    return sum;
};


var sumOfDigits4A = function(s) {
    return s.split('')
            .filter(char => char >= '0' && char <= '9')
            .reduce((sum, digit) => sum + Number(digit), 0);
};

var sumOfDigits4B = function(s) {
    return s.replace(/\D/g, '')
            .split('')
            .reduce((sum, digit) => sum + Number(digit), 0);
};

