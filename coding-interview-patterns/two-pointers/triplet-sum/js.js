function tripletSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const triplets = [];

    for (let i = 0; i < nums.length; i++) {
        // Short-circuit - if the first number is positive, the sum can never be 0
        if (nums[i] > 0) break;

        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Find all pairs that sum to the target (-nums[i])
        const pairs = pairSumSorted(nums, i + 1, -nums[i]);
        for (const pair of pairs) {
            triplets.push([nums[i], ...pair]);
        }
    }

    return triplets;
}

function pairSumSorted(nums, start, target) {
    const pairs = [];
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            pairs.push([nums[left], nums[right]]);
            left++;

            // Skip duplicates for `nums[left]`
            while (left < right && nums[left] === nums[left - 1]) {
                left++;
            }
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return pairs;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
console.log(tripletSum(nums)); // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
