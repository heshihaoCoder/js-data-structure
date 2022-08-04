// 图数据结构的一些概念
// 一个图 = (V, E) 由以下元素组成
// V：一组顶点
// E：一组边，链接V中的顶点

import Dictionary from '../字典（Dictionary）/index'


function Graph() {
  this.vertices = []
  this.adjList = new Dictionary()
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v)
  this.adjList.set(v, [])
}

Graph.prototype.addEdge = function (v, k) {
  this.vertices.get(v).push(k)
  this.vertices.get(k).push(v)
}

// 图的遍历（两种方法）
// 深度优先搜索  DFS
// 广度优先搜索  BFS