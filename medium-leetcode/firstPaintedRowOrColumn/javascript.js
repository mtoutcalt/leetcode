function firstCompletelyPaintedRowOrColumn(arr, mat) {
    const nRows = mat.length;
    const nCols = mat[0].length;

    // Step 1: Create mappings for rows and columns
    const posMap = new Map(); // To map each value to its (row, col) position
    const rows = Array(nRows).fill(0); // To track the painted cells in each row
    const cols = Array(nCols).fill(0); // To track the painted cells in each column

    // Map each value in the matrix to its (row, col) position
    for (let i = 0; i < nRows; i++) {
        for (let j = 0; j < nCols; j++) {
            posMap.set(mat[i][j], [i, j]);
        }
    }

    // Step 2: Process the array and paint cells
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (!posMap.has(num)) continue;

        const [row, col] = posMap.get(num);
        rows[row]++;
        cols[col]++;

        // Check if the current row or column is fully painted
        if (rows[row] === nCols || cols[col] === nRows) {
            return i; // Return the first index where a row or column is fully painted
        }
    }

    return -1; // Return -1 if no row or column is fully painted
}

// Example usage
const arr1 = [1, 3, 4, 2];
const mat1 = [
    [1, 4],
    [2, 3]
];
console.log(firstCompletelyPaintedRowOrColumn(arr1, mat1)); // Output: 2

const arr2 = [2, 8, 7, 4, 1, 3, 5, 6, 9];
const mat2 = [
    [3, 2, 5],
    [1, 4, 6],
    [8, 7, 9]
];
console.log(firstCompletelyPaintedRowOrColumn(arr2, mat2)); // Output: 3
