function Node(item) {
  this.item = item
  // 指向的上一个节点的指针
  this.prev = null
  // 指向的下一个节点的指针
  this.next = null
}

function DoubleLinkedList() {
  this.length = 0;
  // 列表的第一项
  this.head = null
  // 列表的最后一项
  this.tail = null
}

// 插入元素
DoubleLinkedList.prototype.insert = function (pos, item) {
  // 判断下标
  if (pos >= 0 && pos <= this.length) {
    let node = new Node(item);
    let prev;
    let index = 0;
    let current = this.head
    if (pos == 0) {
      if (!this.head) {
        this.head = node
        this.tail = node
      } else {
        this.head = node
        node.next = current
        current.prev = this.head
      }
    }
    else if (pos == this.length) {
      current = this.tail;
      current.next = node
      node.prev = current;
      this.tail = node
    } else {
      while (index++ < pos) {
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
      node.prev = prev;
      current.prev = node

    }
    this.length++;
    return true
  } else {
    return false
  }

}

// 根据位置移除元素
DoubleLinkedList.prototype.removeAt = function (pos) {
  let current = this.head;
  let prev;
  let index = 0;
  if (pos > -1 && pos < this.length) {
    if (pos == 0) {
      // 直接让head 等于head的下一个元素
      this.head = current.next;
      if (this.length == 1) {
        // 只有一项的话  tail也等于null
        this.tail = null
      } else {
        // 让之前的head下一项的prev 指向null   就取消了之前head的引用
        this.head.prev = null
      }
    } else if (pos == this.length - 1) {
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      while (index++ < pos) {
        prev = current
        current = current.next
      }
      // 让上一项的next指向找到元素的下一项
      prev.next = current.next;
      // 找到元素的下一项指向prev
      current.next.prev = prev;
    }
    this.length--;
    return true
  } else {
    return false
  }
}