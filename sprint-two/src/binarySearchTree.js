var BinarySearchTree = function(value) {
  var binaryTree = {};
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  binaryTree.insert = function(val) {
    if (!binaryTree.value) {
      binaryTree.value = val;
      return;
    }
    if (binaryTree.value < val) {
      if (!binaryTree.right) {
        binaryTree.right = BinarySearchTree(val);
      } else {
        binaryTree.right.insert(val);
      }
    } else {
      if (!binaryTree.left) {
        binaryTree.left = BinarySearchTree(val);
      } else {
        binaryTree.left.insert(val);
      }
    }
  };
  binaryTree.contains = function(target) {
    if (binaryTree.value === target) {
      return true;
    } else if (target < binaryTree.value) {
      return !!(binaryTree.left && binaryTree.left.contains(target));
    } else {
      return !!(binaryTree.right && binaryTree.right.contains(target));
    }
  };

  binaryTree.depthFirstLog = function(callBack) {
    if (!binaryTree) {
      return;
    }
    callBack(binaryTree.value);
    if (!!binaryTree.left) {
      binaryTree.left.depthFirstLog(callBack);
    }
    if (!!binaryTree.right) {
      binaryTree.right.depthFirstLog(callBack);
    }
  };

  return binaryTree;
};







/*
 * Complexity: What is the time complexity of the above functions?

var Node  */
// binarySearchTree.insert(2);
// binarySearchTree.contains(7);

// var array = [];
// var func = function(value) { array.push(value); };
// binarySearchTree.depthFirstLog(func);



// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(6);
// console.log('------------')
// console.log(binarySearchTree)