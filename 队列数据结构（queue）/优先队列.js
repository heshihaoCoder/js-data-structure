
function QueueElement(pro, ele) {
  // 保存优先级以及元素
  this.pro = pro;
  this.ele = ele
}


// 其他方法同队列

function PriorityQueue() {
  this.items = []
}
PriorityQueue.prototype.enPriorityQueue = function (pro, ele) {
  let queueElement = new QueueElement(pro, ele)
  let added = false;
  for (let i = 0; i < this.items.length; i++) {
    if (queueElement.pro > this.items[i].pro) {
      this.items.splice(i, 0, queueElement);
      added = true;
      break;
    }
  }
  if (!added) {
    this.items.push(queueElement)
  }
}
PriorityQueue.prototype.print = function () {
  let str = ''
  for (let i = 0; i < this.items.length; i++) {
    str += this.items[i].ele
  }
  console.log(str)
}