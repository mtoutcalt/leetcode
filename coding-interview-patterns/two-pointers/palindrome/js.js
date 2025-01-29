function isPalindrome(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlnum(s[left])) {
            left++;
        }
        while (left < right && !isAlnum(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

function isAlnum(char) {
    return /[a-zA-Z0-9]/.test(char);
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
