def firstCompletelyPaintedRowOrColumn(arr, mat):
    # Step 1: Create mappings for rows and columns
    n_rows, n_cols = len(mat), len(mat[0])
    rows = [0] * n_rows # [0, 0, 0] - if any of these values become 3, then the row is fully painted
    cols = [0] * n_cols # [0, 0, 0] - if any of these values become 3, then the column is fully painted
    pos_map = {} #make dictionary

    # Map each value to its row and column in the matrix
    for i in range(n_rows):
        for j in range(n_cols):
            pos_map[mat[i][j]] = (i, j) # {1: (1, 0), 2: (0, 1), 3: (1, 1), 4: (0, 0), 5: (2, 2), 6: (1, 2), 7: (2, 1), 8: (2, 0), 9: (2, 2)}

    # Step 2: Process the array and track painted cells
    for i, num in enumerate(arr):
        if num not in pos_map:
            continue  # Skip if number is not in the matrix

        row, col = pos_map[num]
        rows[row] += 1
        cols[col] += 1

        # Check if the current row or column is fully painted
        if rows[row] == n_cols or cols[col] == n_rows:
            return i  # Return the first index when a row or column is fully painted

    return -1  # Return -1 if no row or column is fully painted

# Example usage
arr1 = [1, 3, 4, 2]
mat1 = [[1, 4], [2, 3]]
print(firstCompletelyPaintedRowOrColumn(arr1, mat1))  # Output: 2

arr2 = [2, 8, 7, 4, 1, 3, 5, 6, 9]
mat2 = [[3, 2, 5], [1, 4, 6], [8, 7, 9]]
print(firstCompletelyPaintedRowOrColumn(arr2, mat2))  # Output: 3


# time complexity is O(n x m + k) where n is the number of rows and m is the number of columns in the matrix.
# space complexity is O(n x m) for dictionary and O(n + m) for rows and cols arrays.
    # We are using more space to make the time complexity more efficient.