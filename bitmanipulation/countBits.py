from typing import List


class Solution:
    def countBits(self, n: int) -> List[int]:
        ''' Method 1: Brute Force'''
        # freq = []
        # for i in range(n + 1):
        #     num = i
        #     count = 0
        #     while num != 0:
        #         if num & 1:
        #             count += 1
        #         num //= 2
        #     freq.append(count)
        # return freq
        '''Method 3: Bitmanipulation'''
        # freq = [0 for _ in range(n + 1)]
        # for i in range(n + 1):
        #     freq[i] = freq[i >> 1] + i & 1
        # return freq
        '''Method 2: Dynamic Programming'''
        dp = [0 for _ in range(n + 1)]
        offset = 1
        for i in range(1, n + 1):
            if offset * 2 == i:
                offset = i

            dp[i] = 1 + dp[i - offset]

        return dp

solution = Solution()
print(solution.countBits(10))


solution = Solution()
print(solution.countBits(5))
