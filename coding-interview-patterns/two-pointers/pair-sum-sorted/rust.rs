fn pair_sum_sorted(nums: Vec<i32>, target: i32) -> Option<(usize, usize)> {
    let mut left = 0;
    let mut right = nums.len() - 1;

    while left < right {
        let sum = nums[left] + nums[right];
        if sum == target {
            return Some((left, right)); // Return the indices as a tuple
        } else if sum < target {
            left += 1;
        } else {
            right -= 1;
        }
    }

    None // Return None if no pair is found
}

fn main() {
    let nums = vec![1, 2, 3, 4, 6]; //macro to make dynamic vector, preallocates memory
    let target = 6;

    match pair_sum_sorted(nums, target) {
        Some((left, right)) => println!("Pair found at indices: ({}, {})", left, right),
        None => println!("No pair found"),
    }
}
