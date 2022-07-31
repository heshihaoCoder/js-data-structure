'栈是一种后进先出的数据结构（LIFO）有序集合。新添加的元素或者待删除的元素都保存在栈的同一端，称之为栈顶，反之另一侧称之为栈底。新元素都靠近栈顶，旧元素在栈底。'

function Stack() {
  // 用来存储栈内的元素
  this.items = []
}

// 新增元素
Stack.prototype.push = function (element) {
  this.items.push(element)
}

// 移除栈顶的元素
Stack.prototype.pop = function () {
  return this.items.pop()
}

// 返回栈顶的元素
Stack.prototype.peek = function () {
  return this.items[this.items.length - 1]
}

// 判断栈是否为空
Stack.prototype.isEmpty = function () {
  return this.items.length == 0
}

// 清空栈内元素
Stack.prototype.clear = function () {
  this.items = []
}

// 返回栈内元素个数
Stack.prototype.size = function () {
  return this.items.length
}

// 打印栈内元素
Stack.prototype.print = function () {
  console.log(this.items.toString())
}


// Es6

class Stack {
  constructor() {
    this.items = []
  }
  push() {

  };
  pop() {

  };
  // ...
}