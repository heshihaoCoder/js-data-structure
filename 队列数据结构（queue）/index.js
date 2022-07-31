'队列是一种先进先出的线性结构（FIFO） 最常见的就是排队';


function Queue() {
  // 存储队列中的元素
  this.items = []
}

// 添加元素
Queue.prototype.enqueue = function (elemet) {
  this.items.push(elemet);
}

// 移除元素
Queue.prototype.dequeue = function () {
  return this.items.shift();
}

// 返回队列第一个元素
Queue.prototype.front = function () {
  return this.items[0];
}

// 队列是否为空
Queue.prototype.isEmpty = function () {
  return this.items.length == 0;
}

// 队列元素个数
Queue.prototype.size = function () {
  return this.items.length;
}

// 打印队列元素
Queue.prototype.print = function () {
  console.log(this.items.toString())
}