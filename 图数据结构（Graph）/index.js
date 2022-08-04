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
// 深度优先搜索  DFS   数据结构->栈   将顶点存入栈中，顶点式沿着路径呗探索的，存在新的相邻顶点就去探索
// 广度优先搜索  BFS   数据结构->队列  将顶点放入队列中，最先入队列的顶点最先被探索


// 使用三种颜色区分顶点的状态
// white  ：还没被访问
// 灰色：被访问还没被探索
// 黑色：被探索过

// 广度优先搜索也就是  先横向找，在纵向找

// 步骤1.创建一个队列Q
// 将u标注为被发现的灰色，并且将v放入队列Q
// 3.如果队列为空
// (a)   将u从Q中出队列
// （b）.将标注u为被发现的（灰色）；
// （c） 将u所有未被访问过的邻点（白色）入队列；
// （d） 将u标注为已被探索的（黑色）。

let initColor = function () {
  let color = [];
  for (let i = 0; i < this.vertices.length; i++) {
    color[this.vertices[i]] = 'white'
  }
  return color
}

Graph.prototype.BFS = function (v, callback) {
  let color = initColor()
}

