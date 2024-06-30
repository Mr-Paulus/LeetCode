"""
  Problem: https://leetcode.com/problems/single-number-ii/
  Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
"""
class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        
        nums.sort()

        #Loop trough three number and if number is used once
        for x in range(0,len(nums)-1,3):
            
            if nums[x] != nums[x+1] or nums[x] != nums[x+2] or nums[x+1] != nums[x+2]:
                                              
                if nums[x] != nums[x+1] and nums[x] != nums[x+2]:
                    return nums[x] 
                
                elif nums[x+1] != nums[x] and nums[x+1] != nums[x+2]:
                    return nums[x+1] 
                
                else:
                    return nums[x+2] 
          
        return nums[-1]