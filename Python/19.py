"""
  Problem: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
  Given the head of a linked list, remove the nth node from the end of the list and return its head.
"""
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:

        def ListNodeAdd(Node,val):

            if Node.next == None:
                Node.next = ListNode(val)
                return
                
            ListNodeAdd(Node.next,val)
        
        newList = []
        newList.append(head.val)
        while head.next != None:
            
            newList.append(head.next.val)
            head = head.next
            
        newList.pop(len(newList)-n)
        if newList != []:
            returnList = ListNode(newList[0])
            newList =  newList[1:]

            while newList != []:

                ListNodeAdd(returnList,newList[0])
                newList = newList[1:]

            return returnList
        else:
            return None