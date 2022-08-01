var LoseLoseHashCode = function (key) {
  // 根据这个key字符的ascii码的和得到一个数字
  var hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37
}

function HashTable() {
  this.table = []
}

// 添加方法
HashTable.prototype.put = function (key, value) {
  var postition = LoseLoseHashCode(key)

  this.table[postition] = value
}

// 获取方法
HashTable.prototype.get = function (key) {
  return this.table[LoseLoseHashCode(key)]
}

// 移除方法
HashTable.prototype.remove = function (key) {
  this.table[LoseLoseHashCode(key)] = undefined
}




