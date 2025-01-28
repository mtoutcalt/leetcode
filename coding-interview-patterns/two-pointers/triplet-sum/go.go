package main

import (
	"fmt"
	"sort"
)

func tripletSum(nums []int) [][]int {
	sort.Ints(nums) // Sort the array
	var triplets [][]int

	for i := 0; i < len(nums); i++ {
		// Short-circuit - if the first number is positive, the sum can never be 0
		if nums[i] > 0 {
			break
		}

		// Skip duplicates
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		// Find all pairs that sum to the target (-nums[i])
		pairs := pairSumSorted(nums, i+1, -nums[i])
		for _, pair := range pairs {
			triplets = append(triplets, append([]int{nums[i]}, pair...))
		}
	}

	return triplets
}

func pairSumSorted(nums []int, start int, target int) [][]int {
	var pairs [][]int
	left, right := start, len(nums)-1

	for left < right {
		sum := nums[left] + nums[right]
		if sum == target {
			pairs = append(pairs, []int{nums[left], nums[right]})
			left++

			// Skip duplicates for nums[left]
			for left < right && nums[left] == nums[left-1] {
				left++
			}
		} else if sum < target {
			left++
		} else {
			right--
		}
	}

	return pairs
}

func main() {
	nums := []int{-1, 0, 1, 2, -1, -4}
	result := tripletSum(nums)
	fmt.Println(result) // Output: [[-1 -1 2] [-1 0 1]]
}
