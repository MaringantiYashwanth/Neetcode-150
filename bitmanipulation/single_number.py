from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num
        return result


s = Solution()
print(s.singleNumber([3, 2, 3]))
print(s.singleNumber([7, 6, 6, 7, 8]))

