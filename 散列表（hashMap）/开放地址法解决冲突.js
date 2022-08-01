
// 另一种解决冲突的方法是线性探查。当想向表中某个位置加入一个新元素的时候，如果索引
// 为index的位置已经被占据了，就尝试index + 1的位置。如果index + 1的位置也被占据了，就尝试
// index + 2的位置，

function HashTable() {
  this.table = []
}
let ValuePair = function (key, value) {
  this.key = key
  this.value = value
  this.toString = function () {
    return '[' + this.key + ' - ' + this.value + ']';
  }
}

var LoseLoseHashCode = function (key) {
  // 根据这个key字符的ascii码的和得到一个数字
  var hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37
}

// 重写put方法
HashTable.prototype.put = function (key, value) {
  var postition = LoseLoseHashCode(key)
  if (this.table[postition] != undefined) {
    this.table[postition] = value
  } else {
    // 2 也就是有位置了  需要先加1
    let index = postition++
    while (this.table[index] != undefined) {
      index++
    }
    this.table[postition] = new ValuePair(key, value)
  }
}

// 重写get方法
HashTable.prototype.get = function (key) {
  let pos = LoseLoseHashCode(key)
  if (this.table[pos].key == key) {
    return this.table[pos].value
  } else {
    let index = pos++
    while (this.table[pos] != undefined && this.table[pos].key != key) {
      index++
    }
    if (this.table[index].key == key) {
      return this.table[index].value
    }
  }
  return undefined
}

// 重写remove方法
HashTable.prototype.remove = function (key) {
  let pos = LoseLoseHashCode(key)
  if (this.table[pos].key == key) {
    this.table[pos] = undefined
    return true
  } else {
    let index = pos++
    while (this.table[pos] != undefined && this.table[pos].key != key) {
      index++
    }
    if (this.table[index].key == key) {
      this.table[pos] = undefined
      return true
    }
  }
  return false
}

