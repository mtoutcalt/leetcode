def triplet_sum(nums: List[int]) -> List[List[int]]:
    nums.sort()
    triplets = []
    for i in range(len(nums)):
        # short-circuit - if the first number is positive then sum will never be 0
        if nums[i] > 0:
            break
        # skip duplicates if the subsequent number is the same as the previous number
        if i > 0 and nums[i] == nums[i-1]:
            continue
        # find all pairs that sum to a target of '-a' where a is (-nums[i])
        pairs = pair_sum_sorted(nums, i+1, -nums[i])
        for pair in pairs:
            triplets.append([nums[i]] + pair)
    return triplets


def pair_sum_sorted(nums: List[int], start: int, target: int) -> List[int]:
    pairs = []
    left, right = start, len(nums) - 1
    while left < right:
        sum = nums[left] + nums[right]
        if sum == target:
            pairs.append([nums[left], nums[right]])
            left += 1
            # to avoid duplicate '[b,c]' pairs, skip 'b' if it is the same as the previous number
            while left < right and nums[left] == nums[left-1]:
                left += 1
        elif sum < target:
            left += 1
        else:
            right -= 1
    return pairs