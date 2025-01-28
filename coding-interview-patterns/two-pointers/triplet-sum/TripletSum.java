import java.util.*;

public class TripletSum {
    public static List<List<Integer>> tripletSum(int[] nums) {
        Arrays.sort(nums); // Sort the array
        List<List<Integer>> triplets = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            // Short-circuit - if the first number is positive, the sum can never be 0
            if (nums[i] > 0) break;

            // Skip duplicates
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            // Find all pairs that sum to the target (-nums[i])
            List<List<Integer>> pairs = pairSumSorted(nums, i + 1, -nums[i]);
            for (List<Integer> pair : pairs) {
                List<Integer> triplet = new ArrayList<>();
                triplet.add(nums[i]);
                triplet.addAll(pair);
                triplets.add(triplet);
            }
        }

        return triplets;
    }

    private static List<List<Integer>> pairSumSorted(int[] nums, int start, int target) {
        List<List<Integer>> pairs = new ArrayList<>();
        int left = start, right = nums.length - 1;

        while (left < right) {
            int sum = nums[left] + nums[right];
            if (sum == target) {
                pairs.add(Arrays.asList(nums[left], nums[right]));
                left++;

                // Skip duplicates for nums[left]
                while (left < right && nums[left] == nums[left - 1]) {
                    left++;
                }
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return pairs;
    }

    public static void main(String[] args) {
        int[] nums = {-1, 0, 1, 2, -1, -4};
        List<List<Integer>> result = tripletSum(nums);
        System.out.println(result); // Output: [[-1, -1, 2], [-1, 0, 1]]
    }
}
