public class Solution {
    public int minimumOperations(int[] nums, int k) {
        int ops = 0;
        for (int n : nums) {
            int rem = n % k;
            if (rem != 0) {
                // Add the minimum of:
                // 1. The remainder (subtracting to reach previous multiple)
                // 2. k - remainder (adding to reach next multiple)
                ops += Math.min(rem, k - rem);
            }
        }
        return ops;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        
        // Test cases matching the JS file
        int[] test1 = {1, 2, 3, 4};
        System.out.println("Test 1 [1,2,3,4], k=3: " + sol.minimumOperations(test1, 3) + " Expected: 3");
        
        int[] test2 = {1, 2, 3, 4};
        System.out.println("Test 2 [1,2,3,4], k=5: " + sol.minimumOperations(test2, 5) + " Expected: 6");
        
        int[] test3 = {10};
        System.out.println("Test 3 [10], k=3: " + sol.minimumOperations(test3, 3) + " Expected: 1");
    }
}
