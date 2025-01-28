package main

import "fmt"

func pairSumSorted(nums []int, target int) (int, int, bool) {
    left := 0
    right := len(nums) - 1

    for left < right {
        sum := nums[left] + nums[right]
        if sum == target {
            return left, right, true // Return indices and a flag indicating success
        } else if sum < target {
            left++
        } else {
            right--
        }
    }

    return -1, -1, false // Return -1, -1, and a false flag if no pair is found
	//Go doesnt have optional types, returning boolean with return is common pattern
}

func main() {
    nums := []int{1, 2, 3, 4, 6}
    target := 6

    left, right, found := pairSumSorted(nums, target)
    if found {
        fmt.Printf("Pair found at indices: (%d, %d)\n", left, right)
    } else {
        fmt.Println("No pair found")
    }
}
