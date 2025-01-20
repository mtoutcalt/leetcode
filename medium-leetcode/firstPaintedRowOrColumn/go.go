package main

import "fmt"

func firstCompletelyPaintedRowOrColumn(arr []int, mat [][]int) int {
    nRows := len(mat)
    nCols := len(mat[0])

    // Step 1: Create mappings for rows and columns
    posMap := make(map[int][2]int) // To map each value to its (row, col) position
    rows := make([]int, nRows)    // To track painted cells in each row
    cols := make([]int, nCols)    // To track painted cells in each column

    // Map each value in the matrix to its (row, col) position
    for i := 0; i < nRows; i++ {
        for j := 0; j < nCols; j++ {
            posMap[mat[i][j]] = [2]int{i, j}
        }
    }

    // Step 2: Process the array and paint cells
    for i, num := range arr {
        if position, exists := posMap[num]; exists {
            row, col := position[0], position[1]

            rows[row]++
            cols[col]++

            // Check if the current row or column is fully painted
            if rows[row] == nCols || cols[col] == nRows {
                return i // Return the first index where a row or column is fully painted
            }
        }
    }

    return -1 // Return -1 if no row or column is fully painted
}

func main() {
    // Example 1
    arr1 := []int{1, 3, 4, 2}
    mat1 := [][]int{
        {1, 4},
        {2, 3},
    }
    fmt.Println(firstCompletelyPaintedRowOrColumn(arr1, mat1)) // Output: 2

    // Example 2
    arr2 := []int{2, 8, 7, 4, 1, 3, 5, 6, 9}
    mat2 := [][]int{
        {3, 2, 5},
        {1, 4, 6},
        {8, 7, 9},
    }
    fmt.Println(firstCompletelyPaintedRowOrColumn(arr2, mat2)) // Output: 3
}
