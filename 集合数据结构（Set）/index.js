// 顺序数据结构
// 在数学中集合是一组不同的对象的集

function MySet() {
  this.items = {}
}

// 向集合中添加一个元素
MySet.prototype.add = function (value) {
  if (!this.has(value)) {
    this.items[value] = value
    return true
  } else {
    return false
  }
}

// 向集合中删除一个元素
MySet.prototype.delete = function (value) {

  if (this.has(value)) {
    delete this.items[value]
    return true
  } else {
    return false
  }
}

// 判断集合中是否存在某个值
// 因为我们在存储值的时候会将 key 和value 存储为一样的
MySet.prototype.has = function (value) {
  return value in this.items
}

// 移除集合中的所有元素
MySet.prototype.clear = function () {
  this.items = {}
}

// 返回集合中的元素数量
MySet.prototype.size = function () {
  return Object.keys(this.items).length
}

// 返回集合中所有制的数组
MySet.prototype.values = function () {
  let values = []
  Object.keys(this.items).forEach(item => {
    values.push(this.items[item])
  })
  return values
}


// 并集 ->给定的两个集合，返回一个包含两个集合中所有元素的新集合

// 交集 两个给定的两个集合，返回一个包含集合中共有元素的新集合

// 差集 存在第一个集合 但是不存在第二个集中的新集合

// 子集  验证一个给定集合是否是另一个集合的子集



// 并集

MySet.prototype.union = function (otherSet) {
  let newSet = new MySet()

  let values = this.values()
  for (let i = 0; i < values.length; i++) {
    newSet.add(values[i])
  }
  let otherValues = otherSet.values()
  for (let i = 0; i < otherValues.length; i++) {
    newSet.add(otherValues[i])
  }

  return newSet
}


// 实现交集   在a 集合  也在b集合
MySet.prototype.interscection = function (otherSet) {
  let newSet = new MySet()
  let values = this.values()
  for (let i = 0; i < values.length; i++) {
    // 通过has方法判断是否含有values[i]
    if (otherSet.has(values[i])) {
      newSet.add(values[i])
    }
  }
  return newSet
}

// 实现差集     在a集合 不在b集合
MySet.prototype.interscection = function (otherSet) {
  let newSet = new MySet()
  let values = this.values()
  for (let i = 0; i < values.length; i++) {
    // 通过has方法判断是否含有values[i] 
    if (!otherSet.has(values[i])) {
      newSet.add(values[i])
    }
  }
  return newSet
}


// 实现子集     a集合的元素在b都能找到
MySet.prototype.interscection = function (otherSet) {
  if (this.size() > otherSet.size()) {
    return false
  } else {
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      // 通过has方法判断是否含有values[i] 
      if (!otherSet.has(values[i])) {
        return false
      }
    }
    return true
  }

}
