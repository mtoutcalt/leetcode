# Problem: Find the Second Largest Number in an Array

## Given an array of integers nums, find and return the second largest unique number in the array. If it doesn't exist, return null.

### Example
Input: nums = [1, 3, 4, 5, 0, 2]
Output: 4

## Solutions

### Solution 1

```
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

```
* you need to make a freq map because you can only analyze unique numbers
* sort by desc then get second biggest
* big O - the for loop is O(n) and the sort if O(n log n) --- n log n is slower so thats the answer


### Solution 2
```
function secondLargest(nums) {
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let max = -Infinity; //smallest value in javascript
    let secondMax = -Infinity;

    for (const numStr in freq) {
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

    if (secondMax === -Infinity) {
        return null;
    } else {
        return secondMax;
    }
}

console.log(secondLargest([1, 3, 4, 5, 0, 2])); // Output: 4
console.log(secondLargest([7, 7, 7]));          // Output: null
console.log(secondLargest([10, 5, 10]));        // Output: null
console.log(secondLargest([10, 5, 5, 10]));     // Output: null
```
* This will be faster - time complexity of O(n) since it iterates through once for freq and then second time for finding the max and secondMax


### Solution if you don't care about duplicates
```
function secondLargestNoDuplicates(nums) {
    const uniqueNums = [...new Set(nums)]; // Remove duplicates
    uniqueNums.sort((a, b) => b - a); //desc
    return uniqueNums.length < 2 ? null : uniqueNums[1];
}
```
* make a Set to remove duplicates then spread it to make array again