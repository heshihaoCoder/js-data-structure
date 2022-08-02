// 二叉树的节点最多只能有两个节点：一个是左侧子节点，另一个是右侧子节点
// 二叉搜索树也是二叉树的一种，但是他只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储比（父节点）大于等于的值。

function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

// 二叉搜索树
// 键是树相关的术语中对节点的称呼。
function BinarySearchTree() {
  // 根节点
  this.root = null;
}


// insertNode辅助函数
let insertNode = function (node, newNode) {
  if (newNode.key < node.key) {
    if (node.left == null) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if (node.right == null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}

// inOrderTraverseNode辅助函数
let inOrderTraverseNode = function (node, callback) {
  if (node != null) {
    inOrderTraverseNode(node.left, callback)
    callback(node.key)
    inOrderTraverseNode(node.right, callback)
  }
}
// inOrderTraverseNode辅助函数需要的callback
function print(value) {
  console.log(value)
}

// 先序遍历辅助函数
let preOrderTraverseNode = function (node, callback) {
  if (node != null) {
    callback(node.key)
    preOrderTraverseNode(node.left, callback)
    preOrderTraverseNode(node.right, callback)
  }
}

// 后序遍历辅助函数
let postOrderTraverseNode = function (node, callback) {
  if (node != null) {
    postOrderTraverseNode(node.left, callback)
    postOrderTraverseNode(node.left, callback)
    callback(node.key)
  }
}


// 插入一个键
BinarySearchTree.prototype.insert = function (key) {
  let node = new Node(key)
  if (!this.root) {
    this.root = node
  } else {
    insertNode(this.root, node)
  }
}

// 查找一个键
BinarySearchTree.prototype.search = function (key) {

}

// 中序遍历所有节点 也就是以从最小到最大的顺序访问所有节点
BinarySearchTree.prototype.inOrderTraverse = function (callback) {
  inOrderTraverseNode(this.root, callback)
}

// 先序遍历所有节点   先序遍历会先访问节点本身，然后再访问它的左侧子节点，最后是右侧子节点
BinarySearchTree.prototype.preOrderTraverse = function (callback) {
  preOrderTraverseNode(this.root, callback)
}

// 后序遍历所有节点  后序遍历则是先访问节点的后代节点，再访问节点本身
BinarySearchTree.prototype.postOrderTraverse = function (callback) {
  postOrderTraverseNode(this.root, callback)
}

// 返回树中最小的键值
BinarySearchTree.prototype.min = function () {

}

// 返回树中最大的键值
BinarySearchTree.prototype.max = function () {

}

// 从树中移除某个键
BinarySearchTree.prototype.remove = function (key) {

}

let cc = new BinarySearchTree()
cc.insert(5)
cc.insert(4)
cc.insert(6)
cc.insert(7)
cc.insert(3)
console.log(cc)
cc.inOrderTraverse(print)
