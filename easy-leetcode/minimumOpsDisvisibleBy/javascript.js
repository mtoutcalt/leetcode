// Elements Divisible by Three
// Difficulty: Easy
// Topics: Arrays, Math
// Companies: (Various)
// Problem Description
// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
// Return the minimum number of operations to make all elements of nums divisible by 3.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: 3
// Explanation:
// Element 1: needs 1 operation (1→0 or 1→3)
// Element 2: needs 1 operation (2→3)


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumOperations = function (nums, k) {
    let ops = 0; //count of operations
    for (let n of nums) {
        let rem = n % k; //remainder - whats left over after division
        if (rem !== 0) {
            ops += Math.min(rem, k - rem); //add the minimum of -> (the remainder or the difference between k and the remainder
        }
    }
    return ops;
};

//example if k = 5
// 1 % 5 = 1
// 2 % 5 = 2
// 3 % 5 = 3
// 4 % 5 = 4
// 5 % 5 = 0
// 6 % 5 = 1
// 7 % 5 = 2
// 8 % 5 = 3
// 9 % 5 = 4
// 10 % 5 = 0

//then take the remainder and decide which is smaller, the remainder or k - remainder
//in this example of k=5 if remainder is 3 or 4 then take k-remainder, otherwise take remainder
//add the smaller value to ops

// Test cases
console.log("Test 1 [1,2,3,4], k=3:", minimumOperations([1, 2, 3, 4], 3), "Expected: 3");
console.log("Test 2 [1,2,3,4], k=5:", minimumOperations([1, 2, 3, 4], 5), "Expected: 6");
console.log("Test 3 [10], k=3:", minimumOperations([10], 3), "Expected: 1");
