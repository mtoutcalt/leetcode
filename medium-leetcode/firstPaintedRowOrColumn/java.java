import java.util.HashMap;
import java.util.Map;

public class FirstCompletelyPainted {

    public static int firstCompletelyPaintedRowOrColumn(int[] arr, int[][] mat) {
        int nRows = mat.length;
        int nCols = mat[0].length;

        // Step 1: Create mappings for rows and columns
        Map<Integer, int[]> posMap = new HashMap<>(); // To map each value to its (row, col) position
        int[] rows = new int[nRows]; // To track painted cells in each row
        int[] cols = new int[nCols]; // To track painted cells in each column

        // Map each value in the matrix to its (row, col) position
        for (int i = 0; i < nRows; i++) {
            for (int j = 0; j < nCols; j++) {
                posMap.put(mat[i][j], new int[]{i, j});
            }
        }

        // Step 2: Process the array and paint cells
        for (int i = 0; i < arr.length; i++) {
            int num = arr[i];
            if (!posMap.containsKey(num)) continue;

            int[] position = posMap.get(num);
            int row = position[0];
            int col = position[1];

            rows[row]++;
            cols[col]++;

            // Check if the current row or column is fully painted
            if (rows[row] == nCols || cols[col] == nRows) {
                return i; // Return the first index where a row or column is fully painted
            }
        }

        return -1; // Return -1 if no row or column is fully painted
    }

    public static void main(String[] args) {
        // Example 1
        int[] arr1 = {1, 3, 4, 2};
        int[][] mat1 = {
            {1, 4},
            {2, 3}
        };
        System.out.println(firstCompletelyPaintedRowOrColumn(arr1, mat1)); // Output: 2

        // Example 2
        int[] arr2 = {2, 8, 7, 4, 1, 3, 5, 6, 9};
        int[][] mat2 = {
            {3, 2, 5},
            {1, 4, 6},
            {8, 7, 9}
        };
        System.out.println(firstCompletelyPaintedRowOrColumn(arr2, mat2)); // Output: 3
    }
}
