fn triplet_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut nums = nums.clone();
    nums.sort(); // Sort the array
    let mut triplets = Vec::new();

    for i in 0..nums.len() {
        // Short-circuit - if the first number is positive, the sum can never be 0
        if nums[i] > 0 {
            break;
        }
        // Skip duplicates
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }

        // Find all pairs that sum to the target (-nums[i])
        let pairs = pair_sum_sorted(&nums, i + 1, -nums[i]);
        for pair in pairs {
            let mut triplet = vec![nums[i]];
            triplet.extend(pair);
            triplets.push(triplet);
        }
    }

    triplets
}

fn pair_sum_sorted(nums: &[i32], start: usize, target: i32) -> Vec<Vec<i32>> {
    let mut pairs = Vec::new();
    let mut left = start;
    let mut right = nums.len() - 1;

    while left < right {
        let sum = nums[left] + nums[right];
        if sum == target {
            pairs.push(vec![nums[left], nums[right]]);
            left += 1;

            // Skip duplicates for nums[left]
            while left < right && nums[left] == nums[left - 1] {
                left += 1;
            }
        } else if sum < target {
            left += 1;
        } else {
            right -= 1;
        }
    }

    pairs
}

fn main() {
    let nums = vec![-1, 0, 1, 2, -1, -4];
    let result = triplet_sum(nums);
    println!("{:?}", result); // Output: [[-1, -1, 2], [-1, 0, 1]]
}
