def largest_container(heights: List[int]) -> int:
    max_water = 0
    left, right = 0, len(heights) - 1
    while (left < right):
        # calc the water contained between the current pair of lines
        water = min(heights[left], heights[right]) * (right - left) # smallest of the two heights * width
        max_water = max(max_water, water) # update the max water
        # move the pointer with the smaller height.  If both lines have the same height, move both pointers
        if heights[left] < heights[right]:
            left += 1
        elif heights[left] > heights[right]:
            right -= 1
        else:
            left += 1
            right -= 1
    return max_water
