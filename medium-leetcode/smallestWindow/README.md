## Title: Find the Smallest Window in a String Containing All Characters of Another String

### Problem Statement
You are given two strings, s and t. Find the smallest substring in s that contains all the characters of string t (including duplicates). If there is no such substring, return an empty string.

* t is case-sensitive
* s and t are only lowercase letters

### Example

s = "ADOBECODEBANC";
t = "ABC";
Output ---> "BANC"


s = "a";
t = "a";
Output ---> "a"

s = "a";
t = "aa";
Output ---> ""


## Solution

* use the sliding window technique

```
function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    const tFreq = {};
    for (const char of t) {
        tFreq[char] = (tFreq[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let required = Object.keys(tFreq).length;
    let formed = 0;
    const windowCounts = {};

    let minLen = Infinity;
    let minLeft = 0;

    while (right < s.length) {
        const char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (tFreq[char] && windowCounts[char] === tFreq[char]) {
            formed++;
        }

        while (formed === required) {
            const windowChar = s[left];

            // Update the smallest window
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
            }

            // Remove the character at `left` from the window
            windowCounts[windowChar]--;
            if (tFreq[windowChar] && windowCounts[windowChar] < tFreq[windowChar]) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
}

```

### Sliding Window
* used to solve problems involving substrings, subarrays, sublists
    * find a contiguous portion of an input that meets criteria like mnin length/max sum/matching target
* use 2 pointers -- left and right - to make the range or window of the input
* start with the right pointer, increment, do a valid check
* once the right window has met criteria, shrink the window by moving left pointer - determine if there are characters you can trim from the front

* Other examples for sliding window
    * find the max sum of a subarray
    * find distinct elements in every window

#### Reasons to use it
* avoids nested loops which has bad time complexity, especially for large inputs
* less redundant - isn't traversing over same elements
* The brute force approach will be slower but still O(n), but it will calculate more sums than sliding window
    * It could be O(n * k)



Example ---
```
function maxSumSubarray(nums, k) {
    let maxSum = 0;
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        // Add the next element to the window
        windowSum += nums[right];

        // Check if the window size is `k`
        if (right - left + 1 === k) {
            // Update the maximum sum
            maxSum = Math.max(maxSum, windowSum);

            // Remove the element going out of the window
            windowSum -= nums[left];
            left++;
        }
    }

    return maxSum;
}

console.log(maxSumSubarray([1, 3, 2, 4, 5, 2, 8, 1], 3)); // Output: 15
```

* The Big O time compexity of O(n) since the window still needs to slide all the way down 