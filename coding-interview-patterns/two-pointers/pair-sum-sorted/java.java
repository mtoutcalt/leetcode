import java.util.Arrays;

public class PairSumSorted {
    public static int[] pairSumSorted(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int sum = nums[left] + nums[right];
            if (sum == target) {
                return new int[]{left, right}; // Return the indices
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return new int[0]; // Return an empty array if no pair is found
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 6};
        int target = 6;

        int[] result = pairSumSorted(nums, target);
        if (result.length == 2) {
            System.out.println("Pair found at indices: " + Arrays.toString(result));
        } else {
            System.out.println("No pair found");
        }
    }
}
