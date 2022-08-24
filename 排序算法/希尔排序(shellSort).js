let shellSort = function () {
  //获取数组长度
  var size = this.items.length
  //初始化增量(间隔)
  var gap = Math.floor(size / 2)
  while (gap >= 1) {
    //gap分组，分组进行排序
    for (var i = gap; i < size; i++) {
      var temp = this.items[i]
      var j = i
      while (this.items[j - gap] > temp & j > gap - 1) {
        this.items[j] = this.items[j - gap]
        j -= gap
      }
      this.items[j] = temp
    }
    gap = Math.floor(gap / 2)
  }
}
