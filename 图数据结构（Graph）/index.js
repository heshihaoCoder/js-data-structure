// 图数据结构的一些概念
// 一个图 = (V, E) 由以下元素组成
// V：一组顶点
// E：一组边，链接V中的顶点

import Dictionary from '../字典（Dictionary）/index'
import Queue from '../队列数据结构（queue）/index'


function Graph() {
  // 保存顶点信息
  this.vertices = []
  // 存储临接表
  this.adjList = new Dictionary()
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v)
  this.adjList.set(v, [])
}

Graph.prototype.addEdge = function (v, k) {
  // 有方向的话只需要这一句
  this.vertices.get(v).push(k)
  //没有方向则都需要添加
  this.vertices.get(k).push(v)
}

let gra = new Graph()
// 所有的顶点
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

// 将顶点添加到vertices
for (let i = 0; i < myVertices.length; i++) {
  gra.addVertex(myVertices[i])
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
  // 遍历开始我们所有的顶点都是白色
  let color = initializeColor(); //{2} 
  let queue = new Queue(); //{3} 
  // 先将 一个顶点 进入队列
  queue.enqueue(v); //{4} 
  while (!queue.isEmpty()) { //{5} 
    //  在拿出A
    let u = queue.dequeue(); //{6} 
    // 根据A可以拿到 A 对应的保存的队列   比如 A ->  B,C,D
    let neighbors = this.adjList.get(u); //{7} 
    color[u] = 'grey'; // {8} 

    for (let i = 0; i < neighbors.length; i++) { // {9} 
      // 如果是  A ->[B,C,D]   会将BCD依次进入队列   之后  在执行 {6}   直到没有元素
      let w = neighbors[i]; // {10} 
      if (color[w] === 'white') { // {11} 
        color[w] = 'grey'; // {12} 
        queue.enqueue(w); // {13} 
      }
    }
    color[u] = 'black'; // {14} 
    if (callback) { // {15} 
      callback(u);
    }
  }
}


// 使用BFS寻找最短路径

// 改进版BFS
Graph.prototype.optimizeBFS = function (v) {
  let color = initColor();
  let queue = new Queue();
  // 距离
  let d = []; //{1}
  // 前朔点
  let prev = [];  //{2}
  queue.enqueue(v);

  for (let i = 0; i < this.vertices.length; i++) {   //{3}
    // 初始化距离
    d[this.vertices[i]] = 0
    // 初始化前朔点
    prev[this.vertices[i]] = null
  }

  while (!queue.isEmpty()) {
    let u = queue.dequeue();
    let neighbors = this.adjList.get(u);
    color[u] = 'grey';
    for (i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === 'white') {
        color[w] = 'grey';
        // 这个 d[w]  由  d[u]来的
        d[w] = d[u] + 1; //{6} 
        pred[w] = u; //{7} 
        queue.enqueue(w);
      }
    }
    color[u] = 'black';
  }
  return { //{8} 
    distances: d,
    predecessors: pred
  };

}

// 深度优先搜索 DFS   会先纵向查找顶点

// 深度优先搜索算法不需要一个顶点  ，在深度优先搜索算法中，若图中顶点v未访问，则访问该顶点v。

// 要访问顶点需要进行的步骤
// （1）.标注v为被发现的（灰色）
// （2）.对于v的所有为访问的临点w，访问点w，标记v为已经探索的

// 深度优先算法的步骤是递归的，这意味着深度优先算法使用栈来存储函数调用（由递归调用创建的栈）

Graph.prototype.DFS = function (callback) {
  let color = initColor()
}
