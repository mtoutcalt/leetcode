def pair_sum_sorted(nums: List[int], target: int) -> List[int]:
    leftPointer, rightPointer = 0, len(nums) - 1
    while leftPointer < rightPointer:
        current_sum = nums[leftPointer] + nums[rightPointer]
        if current_sum == target:
            return [leftPointer, rightPointer]
        if target > current_sum:
            leftPointer += 1
        else:
            rightPointer -= 1
    return []