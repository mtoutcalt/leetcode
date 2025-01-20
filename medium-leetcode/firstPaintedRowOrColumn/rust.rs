use std::collections::HashMap;

fn first_completely_painted_row_or_column(arr: Vec<i32>, mat: Vec<Vec<i32>>) -> i32 {
    let n_rows = mat.len();
    let n_cols = mat[0].len();

    // Step 1: Create mappings for rows and columns
    let mut pos_map = HashMap::new(); // To map each value to its (row, col) position
    let mut rows = vec![0; n_rows]; // To track painted cells in each row
    let mut cols = vec![0; n_cols]; // To track painted cells in each column

    // Map each value in the matrix to its (row, col) position
    for i in 0..n_rows {
        for j in 0..n_cols {
            pos_map.insert(mat[i][j], (i, j));
        }
    }

    // Step 2: Process the array and paint cells
    for (i, &num) in arr.iter().enumerate() {
        if let Some(&(row, col)) = pos_map.get(&num) {
            rows[row] += 1;
            cols[col] += 1;

            // Check if the current row or column is fully painted
            if rows[row] == n_cols || cols[col] == n_rows {
                return i as i32; // Return the first index where a row or column is fully painted
            }
        }
    }

    -1 // Return -1 if no row or column is fully painted
}

fn main() {
    // Example 1
    let arr1 = vec![1, 3, 4, 2];
    let mat1 = vec![
        vec![1, 4],
        vec![2, 3],
    ];
    println!("{}", first_completely_painted_row_or_column(arr1, mat1)); // Output: 2

    // Example 2
    let arr2 = vec![2, 8, 7, 4, 1, 3, 5, 6, 9];
    let mat2 = vec![
        vec![3, 2, 5],
        vec![1, 4, 6],
        vec![8, 7, 9],
    ];
    println!("{}", first_completely_painted_row_or_column(arr2, mat2)); // Output: 3
}
