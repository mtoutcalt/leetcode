package main

import (
	"fmt"
)

func maxScore(s string) int {
	zeroCount := 0 //shorthand for var zeroCount int zeroCount = 0
	oneCount := 0

	// Count the total number of '1's in the string
	for _, char := range s { //ignore index we dont need it
		if char == '1' {
			oneCount++
		}
	}

	maxScore := 0

	// Iterate through the string, excluding the last character
	for i := 0; i < len(s)-1; i++ {
		if s[i] == '0' {
			zeroCount++
		} else {
			oneCount--
		}

		// Calculate the score for the current split
		currentScore := zeroCount + oneCount
		if currentScore > maxScore {
			maxScore = currentScore
		}
	}

	return maxScore
}

func main() {
	s := "011101"
	fmt.Println("Max Score:", maxScore(s))
}
