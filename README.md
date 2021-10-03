# find_violating_node_BST

Given a binary search tree, return the value of the violating node. When there is a violation, return the lowest node. If there is no violating node, return -1.

```
Example:

      5
    /   \
  2       10
    \
      8
      
We have a violation between 5 and 8 because 8 is not less then 5. Because 8 is the lower node, return 8.

Input: root
Output: value of violating node
```
