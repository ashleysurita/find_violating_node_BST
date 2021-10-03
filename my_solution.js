/*
Binary trees are already definned with this interface:
  function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }
*/

function findViolatingNodeInBST(root, min = -Infinity, max = Infinity) {
 if(!root) return -1
  
  const isValid = root.value > min && root.value < max
  if(!isValid) return root.value
  
  const left = findViolatingNodeInBST(root.left, min, root.value)
  const right = findViolatingNodeInBST(root.right, root.value, max)
  
  if(left > -1) return left
  if(right > -1) return right
  
  return -1
}
