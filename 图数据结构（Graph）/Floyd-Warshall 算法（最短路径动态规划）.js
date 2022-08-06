// 最短路径的动态规划算法

let floydWarshall = function () {
  this.graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
  ];
  // 步骤解释、
  //  行{1}：首先，把dist数组初始化为每个顶点之间的权值，因为i到j可能的最短距离就
  //  是这些顶点间的权值。
  //  行{2}：通过k，得到i途径顶点0至k，到达j的最短路径。
  //  行{3}：判断i经过顶点k到达j的路径是否比已有的最短路径更短。
  //  行{4}：如果是更短的路径，则更新最短路径的值。
  var dist = [],
    length = this.graph.length,
    i, j, k;
  for (i = 0; i < length; i++) { //{1} 
    dist[i] = [];
    for (j = 0; j < length; j++) {
      dist[i][j] = this.graph[i][j];
    }
  }
  for (k = 0; k < length; k++) { //{2} 
    for (i = 0; i < length; i++) {
      for (j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) { //{3} 
          dist[i][j] = dist[i][k] + dist[k][j]; //{4} 
        }
      }
    }
  }
  return dist;
};

