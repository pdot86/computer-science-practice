# Binary Trees

## Vocabulary

**Node:** The fundamental part of a tree. It may have a key and a payload. Every node, except the Root Node has exactly 1 incoming Edge, and every node may have 0, 1, or 2 outgoing Edges.

**Edge:** Connects two nodes to display a relationship.

**Root Node:** The origin node of the tree, also, the only node in the tree with no incoming edges.

**Path:** An ordered list of nodes connected by edges.

**Children:** Nodes that incoming Edges, they are Children of the node which the incoming edge comes from.

**Parent:** A node with any outgoing Edges, is a Parent of any nodes connected to the outgoing Edge(s).

**Sibling:** Nodes that share a Parent.

**Subtree:** A set of node comprised of a Parent and all of its' descendants.

**Leaf Node:** A node with no children. Also referred to as a node of degree zero.

**Branch Node:** A node with at least 1 outgoing Edge.

**Level:** The number of Edge(s) on the Path from the Root Node to the current node.

**Height:** The maximum level of any node in the tree.

**Degree:** The number of Subtree(s) of a node.

**Balanced:** A Binary Tree is balanced when the Left Subtree Height (LSH) minus the Right Subtree Height (RSH) is less than or equal to one AT EVERY NODE. LSH - RSH <= 1 

```
               root
              /    \
          branch  branch
           /      /    \
        leaf    leaf  branch
                       /
                     leaf
```
> The above tree has 3 levels, 3 branch nodes, and 3 leaf nodes. The branches at degree 1 are siblings; so it the two leaf nodes and the branch on degree 2. The left most leaf on degree 2 is the child of the left branch (parent) on degree 1.


## Types of Binary Trees

### Full
All Branch Nodes of the tree must have either 0 or 2 Children (degree of 0 or 2), and never just 1.
```
         1     
        / \    
     2      3  
    / \    / \ 
  4     5 6   7
 / \   /       
8   9 10       
```

### Complete 
Filling out the nodes you go top to bottom and left to right. (Also used as a Binary Heap)
```
           1     
        /   \    
     2        3  
    / \      / \ 
  4     5   6   7
 / \   / \       
8   9 10 11           
```

### Perfect
Every leaf node with children has exactly 2 children and the edge nodes are all on the same level. A Perfect Binary Tree is both Full and Complete.
```
           1           
        /     \        
     2           3     
    / \         / \    
  4     5     6     7  
 / \   / \   / \   / \ 
8   9 10 11 12 13 14 15
```

## Balanced Binary Tree
Since we know that every node must meet the equation LSH - RSH <= 1 we can traverse our tree and see if it is balanced.

```
     2
    / \
   1   3

At node 2
LSH = 1
RSH = 1
1 - 1 = 0
0 <= 1
BALANCED

At node 1
LSH = 0
RSH = 0
0 - 0 = 0
0 <= 1
BALANCED

At node 3
LSH = 0
RSH = 0
0 - 0 = 0
0 <= 1
BALANCED

Every node is balanced.
```

```
     4
   /   \
  1     6
       / \
      5   7

At node 4
LSH = 1
RSH = 1
1 - 1 = 0
0 <= 1
BALANCED

At node 1
LSH = 0
RSH = 0
0 - 0 = 0
0 <= 1
BALANCED

At node 6
LSH = 0
RSH = 0
0 - 0 = 0
0 <= 1
BALANCED

At node 5
LSH = 0
RSH = 0
0 - 0 = 0
0 <= 1
BALANCED

At node 7
LSH = 0
RSH = 0
0 - 0 = 0
0 <= 1
BALANCED

Every node is balanced.
```

```
     2

LSH = 0
RSH = 0
0 - 0 = 0
0 <= 1
BALANCED

Every node is balanced.
```

```
     null

LSH = 0
RSH = 0
0 - 0 = 0
0 <= 1
BALANCED

Every node is balanced.
```

## Representing a Binary Tree

For any complete or almost complete Binary Tree, you can efficiently store it as an array where the Root Node is index 0 and each left and right child is stored at index 2k+1 and 2k+2 respectively.

For any binary tree that is NOT complete or almost complete storing them as an array will result is unused allocated space in the array, and thus is better suited to use a linked structure such as a linked list.

## Traversal

There are 3 keys ways to traverse a Binary Tree:
1) Pre-order `node > left > right`
2) In-order `left > node > right`
3) Post-order `left > right > node`

The left and right are always in the same sequence- only the position of the node is changed between the 3 key traversals.

### Pre-order
> `node > left > right`
```
          10        
       /       \     
     7         11
    / \          \  
   6   8         20    
 /      \       /  \   
1        9     14  22     

[10, 7, 6, 1, 8, 9, 11, 20, 14, 22]
```
- Starting at the root node
- We look at the node and get node **10**
  - `[10]`
- We go left and land on node 7
- We look at the node and get node **7**
  - `[10, 7]`
- We go left and land on node 6
- We look at the node and get node **6**
  - `[10, 7, 6]`
- We go left and land on node 1
- We look at the node and get node **1**
  - `[10, 7, 6, 1]`
- Traverse back up until we find an unvisited node
- We land on node 7
- We have already looked at the node and the left
- We go right and land on node 8
- We look at the node and get node **8**
  - `[10, 7, 6, 1, 8]`
- There is no left
- We go right and land on node 9
- We look at the node and get node **9**
  - `[10, 7, 6, 1, 8, 9]`
- There is no left
- There is no right
- Traverse back up until we find an unvisited node
- We land on node 10
- We have already looked at the node and the left
- We go right and land on node 11
- We look at the node and get node **11**
  - `[10, 7, 6, 1, 8, 9, 11]`
- There is no left
- We go right and land on node 20
- We look at the node and get node **20**
  - `[10, 7, 6, 1, 8, 9, 11, 20]`
- We go left and land on node 14
- We look at the node and get node **14**
  - `[10, 7, 6, 1, 8, 9, 11, 20, 14]`
- There is no left
- There is no right
- Traverse back up until we find an unvisited node
- We land on node 20
- We have already looked at the node and the left
- We go right and land on node 22
- We look at the node and get node **22**
  - `[10, 7, 6, 1, 8, 9, 11, 20, 14, 22]`
- There is no left
- There is no right
- Traverse back up until we find an unvisited node
- We land back at the root with no unvisited nodes
- DONE.
  - `[10, 7, 6, 1, 8, 9, 11, 20, 14, 22]`

### In-order
> `left > node > right`
```
          10        
       /       \     
     7         11
    / \          \  
   6   8         20    
 /      \       /  \   
1        9     14  22     

[1, 6, 7, 8, 9, 10, 11, 14, 20, 22]
```
- Starting at the root node
- We go left and land on node 7
- We go left and land on node 6
- We go left and land on node 1
- There is no left
- We look at the node and get node **1**
  - `[1]`
- There is no right
- Traverse back up until we find an unvisited node
- We land on node 6
- We look at the node and get ndoe **6**
  - `[1, 6]`
- There is no right
- Traverse back up until we find an unvisited node
- We land on node 7
- We look at the node and get node **7**
  - `[1, 6, 7]`
- We go right and land on node 8
- There is no left
- We look at the node and get node **8**
  - `[1, 6, 7, 8]`
- We go right and land on node 9
- There is no left
- We look at the ndoe and get node **9**
  - `[1, 6, 7, 8, 9]`
- There is no right
- Traverse back up until we find an unvisited node
- We land on node 10
- We have already looked left
- We look at the node and get node **10**
  - `[1, 6, 7, 8, 9, 10]`
- We go right and land on node 11
- There is no left
- We look at the node and get node **11**
  - `[1, 6, 7, 8, 9, 10, 11]`
- We go right and land on node 20
- We go left and land on node 14
- There is no left
- We look at the node and get node **14**
  - `[1, 6, 7, 8, 9, 10, 11, 14]`
- There is no right
- Traverse back up until we find an unvisited node
- We land on node 20
- We have already gone left
- We look at the node and get node **20**
  - `[1, 6, 7, 8, 9, 10, 11, 14, 20]`
- We go right and land on node 22
- There is no left
- We look at the node and get node **22**
  - `[1, 6, 7, 8, 9, 10, 11, 14, 20, 22]`
- There is no right
- Traverse back up until we find an unvisited node
- We land back at the root with no unvisited nodes
- DONE.
  - `[1, 6, 7, 8, 9, 10, 11, 14, 20, 22]`

### Post-order
> `left > right > node`
```
          10        
       /       \     
     7         11
    / \          \  
   6   8         20    
 /      \       /  \   
1        9     14  22  

[1, 6, 9, 8, 7, 14, 22, 20, 11, 10]
```
- Starting at the root node
- We go left and land on node 7
- We go left and land on node 6
- We go left and land on node 1
- There is no left
- There is no right
- We look at the node and get node **1**
  - `[1]`
- Traverse back up until we find an unvisited node
- We land on node 6
- There is no right
- We look at the node and get node **6**
  - `[1, 6]`
- Traverse back up until we find an unvisited node
- We land on node 7
- We go right and land on node 8
- There is no left
- We go right and land on node 9
- There is no left
- There is no right
- We look at the node and get node **9**
  - `[1, 6, 9]`
- Traverse back up until we find an unvisited node
- We land on node 8
- We have already looked at the left and right
- We look at the node and get node **8**
  - `[1, 6, 9, 8]`
- Traverse back up until we find an unvisited node
- We land on node 7
- We have already looked left and right
- We look at the node and get node **7**
  - `[1, 6, 9, 8, 7]`
- Traverse back up until we find an unvisited node
- We land on node 10
- We have already gone left, so now we go right
- We land on node 11
- There is no left
- We go right and land on node 20
- We go left and land on node 14
- There is no left
- There is no right
- We look at the node and get node **14**
  - `[1, 6, 9, 8, 7, 14]`
- Traverse back up until we find an unvisited node
- We land on node 20
- We have already looked left
- We look right and land on node 22
- There is no left
- There is no right
- We look at the node and get node **22**
  - `[1, 6, 9, 8, 7, 14, 22]`
- Traverse back up until we find an unvisited node
- We land on node 20
- We have already looked left and right
- We look at the node and get node **20**
  - `[1, 6, 9, 8, 7, 14, 22, 20]`
- Traverse back up until we find an unvisited node
- We land on node 11
- We have already looked left and right
- We look at the node and get node **11**
  - `[1, 6, 9, 8, 7, 14, 22, 20, 11]`
- Traverse back up until we find an unvisited node
- We land on node 10
- We have already looked left and right
- We look at the node and get node **10**
  - `[1, 6, 9, 8, 7, 14, 22, 20, 11, 10]`
- Traverse back up until we find an unvisited node
- We land back at the root with no unvisited nodes
- DONE.
  - `[1, 6, 9, 8, 7, 14, 22, 20, 11, 10]`