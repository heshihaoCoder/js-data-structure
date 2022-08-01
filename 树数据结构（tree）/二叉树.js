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

// 中序遍历所有节点
BinarySearchTree.prototype.inOrderTraverse = function () {

}

// 先序遍历所有节点
BinarySearchTree.prototype.preOrderTraverse = function () {

}

// 后序遍历所有节点
BinarySearchTree.prototype.postOrderTraverse = function () {

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

let tree = new BinarySearchTree()


tree.insert(7);
tree.insert(6);
tree.insert(5);

tree.insert(4);
tree.insert(3);

tree.insert(2);
tree.insert(1);
tree.insert(72);
tree.insert(73);

tree.insert(74);
tree.insert(75);
console.log(tree)