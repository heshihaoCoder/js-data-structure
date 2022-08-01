

function Dictionary() {
  this.item = {}
}

// has方法
Dictionary.prototype.has = function (key) {
  return key in this.item
}

// set方法
Dictionary.prototype.set = function (key, value) {
  this.item[key] = value
}

// get方法
Dictionary.prototype.get = function (key) {
  return this.item[key]
}

// 删除方法
Dictionary.prototype.delete = function (key) {
  if (this.item.has(key)) {
    delete this.item[key]
    return true
  }
  return false
}

// 清空方法
Dictionary.prototype.clear = function () {
  this.item = {}
}

// size方法
Dictionary.prototype.size = function () {
  return Object.keys(this.item).length
}

// 字典的所有键名
Dictionary.prototype.keys = function () {
  return Object.keys(this.item)
}

// 字典的所有键值
Dictionary.prototype.keys = function () {
  return Object.values(this.item)
}