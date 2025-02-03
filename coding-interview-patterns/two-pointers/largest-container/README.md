# Largest Container - Two Pointer Approach

## Problem Statement
Given an array `heights` where each element represents the height of a vertical line on a 1D plane, find two lines that together with the x-axis form a container such that the container holds the most water.  You must use the minimum height of the 2 otherwise the water would overflow

You must return the maximum amount of water that can be contained.

## Solution Explanation
The function `largest_container(heights: List[int]) -> int` implements an efficient **two-pointer** approach to solve the problem in **O(n) time complexity**.

### Algorithm
1. **Initialize Two Pointers**:
   - `left` starts at index `0` (beginning of the array).
   - `right` starts at the last index (`len(heights) - 1`).
   - `max_water` keeps track of the maximum water stored.

2. **Calculate the Water Stored**:
   - The amount of water stored between two lines at `left` and `right` is given by:
     ```
     water = min(heights[left], heights[right]) * (right - left)
     ```
   - Update `max_water` if the current water value is larger.

3. **Move the Pointer with the Smaller Height**:
   - If `heights[left] < heights[right]`, move `left` to the right (`left += 1`).
   - If `heights[left] > heights[right]`, move `right` to the left (`right -= 1`).
   - If both heights are equal, move both pointers inward.

4. **Repeat Until Pointers Meet**.

### Code Implementation
```python
from typing import List

def largest_container(heights: List[int]) -> int:
    max_water = 0
    left, right = 0, len(heights) - 1
    while left < right:
        water = min(heights[left], heights[right]) * (right - left)
        max_water = max(max_water, water)

        if heights[left] < heights[right]:
            left += 1
        elif heights[left] > heights[right]:
            right -= 1
        else:
            left += 1
            right -= 1
            
    return max_water
