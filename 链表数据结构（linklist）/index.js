'大多数语言中数组的大小固定，从数组的起点或中间插入或移除项的成本很高,需要移动元素。'
// 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素都是由一个存储元素本身的节点和一个指向下一个元素的引用

// 存储元素的节点
function Node(item) {
  // 元素
  this.item = item;
  // 指针
  this.next = null;
}

// 链表构造函数
function LinkedList() {
  this.length = 0;
  this.head = null;
}

// 添加元素
LinkedList.prototype.append = function (ele) {
  let node = new Node(ele)
  let current;
  if (this.head == null) {
    this.head = node
  } else {
    current = this.head
    while (current.next) {
      // 这里也就是找到了最后一个元素
      current = current.next
    }
    current.next = node
  }
}

// 插入元素
// else if (pos == this.length) {
//   while (current.next) {
//     current = current.next
//   }
//   current.next = node
// }
LinkedList.prototype.insert = function (pos, ele) {
  let node = new Node(ele)
  // 越界判断
  if (pos >= 0 && pos <= this.length) {
    let current = this.head;
    let index = 0;
    let pre;
    if (pos == 0) {
      this.head = node;
      node.next = current;
    } else {
      while (index++ < pos) {
        pre = current;
        current = current.next
      }
      node.next = current;
      pre.next = node
    }
    // 长度加1
    this.length++;
    return true;
  }
  else {
    return false
  }
}

// 根据位置移除元素
LinkedList.prototype.removeAt = function (pos) {
  if (pos > -1 && pos < this.length) {
    let current = this.head;
    let pre;
    let index = 0

    // 移除第一项
    if (pos == 0) {
      this.head = current.next
    } else {
      while (index++ < pos) {
        pre = current
        current = current.next
      }
      pre.next = current.next;
    }
    this.length--
    return current.ele
  } else {
    return null
  }
}

// 移除元素
LinkedList.prototype.remove = function (ele) {
  let index = this.indexOf(ele)
  return this.removeAt(index)
}

// 元素所在的位置
LinkedList.prototype.indexOf = function (ele) {
  let current = this.head;
  let index = 0;
  while (current) {
    if (current.item == ele) {
      return index
    }
    index++
    current = current.next;
  }
  return -1
}

// 链表是否为空
LinkedList.prototype.isEmpty = function () {
  return this.length == 0
}

// 获取链表元素个数
LinkedList.prototype.size = function () {
  return this.length
}

// 获取第一个元素
LinkedList.prototype.getHead = function () {
  return this.head
}


// toString方法会把LinkedList对象转换成一个字符串。
LinkedList.prototype.toString = function () {
  let current = this.head
  let str = ''
  while (current) {
    str += current.ele + (current.next ? 'n' : '')
    current = current.next
  }
  return str
}