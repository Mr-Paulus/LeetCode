"""
  Problem: https://leetcode.com/problems/median-of-two-sorted-arrays/description/
  Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
"""

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        
        newlist = []
        aantal = 0
        
        while nums1 != [] and nums2 != []:
            aantal += 1
            if nums1[0] > nums2[0]:
                newlist.append(nums2[0])
                nums2 = nums2[1:]
            else:
                newlist.append(nums1[0])
                nums1 = nums1[1:]
                
        if  nums1  == []:
            adder = nums2
            
        else:
            adder = nums1
            
        for x in adder:
            aantal += 1
            newlist.append(x)
            
        if aantal%2 ==1:
            print(int(aantal/2))
            
            return newlist[int(aantal/2)]
        else:
            aantal = int((aantal) /2)
            print(aantal)
            return (newlist[aantal-1]+newlist[aantal]) / 2
