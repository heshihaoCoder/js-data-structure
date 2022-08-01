// 上面的会出现地址冲突  所以我们需要在每个地址上让他成为一个链表
function HashTable() {
  this.table = []
}

var LoseLoseHashCode = function (key) {
  // 根据这个key字符的ascii码的和得到一个数字
  var hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37
}

let ValuePair = function (key, value) {
  this.key = key
  this.value = value
  this.toString = function () {
    return '[' + this.key + ' - ' + this.value + ']';
  }
}

// 重写put 方法
HashTable.prototype.put = function (key, value) {
  var postition = LoseLoseHashCode(key)
  if (this.table[postition] == undefined) {
    this.table[postition] = new linklist()
  }
  // append 参见链表数据结构
  this.table[postition].append(new ValuePair(key, value))
}

// 重写get方法
HashTable.prototype.get = function (key) {
  let pos = LoseLoseHashCode(key)
  if (this.table[pos] != undefined) {
    // getHead 参见链表数据结构
    let current = this.table[pos].getHead()
    while (current.next) {
      if (current.ele.key == key) {
        return current.ele.value
      }
      current = current.next
    }
    if (current.ele.key == key) {
      return current.ele.value
    }
  }
  return undefined
}

// 重写移除方法
HashTable.prototype.remove = function (key) {
  let pos = LoseLoseHashCode(key)
  if (this.table[pos] !== undefined) {
    let current = new linklist.getHead()
    while (current.next) {
      if (current.ele.key == key) {
        this.table[pos].remove(current.ele)
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true
      }
      current = current.next
    }
    if (current.element.key === key) { //{16} 
      this.table[pos].remove(current.element);
      if (this.table[pos].isEmpty()) {
        this.table[pos] = undefined;
      }
      return true;
    }
  } else {
    return false
  }
}