function maxScore(s) {
    let zero = 0;
    let one = s.split('1').length - 1; // Count the number of '1's in the string ....creates an array like ['0', '00', '000'] and counts the length of the array - 1
    let res = 0;

    for (let i = 0; i < s.length - 1; i++) { // Exclude the last character to avoid empty right side
        if (s[i] === '0') {
            zero++;
        } else {
            one--;
        }
        res = Math.max(res, zero + one);
    }

    return res;
}
