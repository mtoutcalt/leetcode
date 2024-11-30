function secondLargest(nums) {
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const uniqueNums = Object.keys(freq)
        .filter(num => freq[num] === 1)
        .map(Number);

    if (uniqueNums.length < 2) {
        return null;
    }

    // sort in desc order
    uniqueNums.sort((a, b) => b - a);
    return uniqueNums[1]; //return second number
}


function secondLargest2(nums) {
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let max = -Infinity; //smallest value in javascript
    let secondMax = -Infinity;

    for (const numStr in freq) { //ex. freq = { '10': 2, '5': 1 }
        const num = Number(numStr);
        if (freq[numStr] === 1) {
            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax && num !== max) {
                secondMax = num;
            }
        }
    }

    if (secondMax === -Infinity) { //if secondMax was never changed return null
        return null;
    } else {
        return secondMax;
    }
}

console.log(secondLargest2([1, 3, 4, 5, 0, 2])); // Output: 4
console.log(secondLargest2([7, 7, 7]));          // Output: null
console.log(secondLargest2([10, 5, 10]));        // Output: null
console.log(secondLargest([10, 6, 8, 5, 5, 10]));     // Output: 6
console.log(secondLargest2([10, 5, 5, 10]));     // Output: null
console.log(secondLargest2([10, 7, 5, 10]));     // Output: 5