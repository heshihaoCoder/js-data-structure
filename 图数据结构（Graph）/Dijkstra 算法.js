// 最短路径的贪心算法

var graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
]


function Dijkstra(src) {
  let dist = [];
  let visited = [];
  let length = graph.length

  for (let i = 0; i < length; i++) {  //{1}
    dist[i] = Number.MAX_VALUE
    visited[i] = false
  }
  dist[src] = 0;   //{2}
  for (let i = 0; i < length - 1; i++) { //{3}
    let u = minDistance(dist, visited)  //{4}
    visited[u] = true  //{5}

    for (let v = 0; v < length; v++) {
      if (!visited[v] && graph[u][v] != 0 && dist[u] != Number.MAX_VALUE && dist[u] + graph[u][v] < dist[v]) {  //{6}
        dist[v] = dist[u] + graph[u][v]  //{7}
      }
    }
  }
  return dist  //{8}
}
var minDistance = function (dist, visited) {
  var min = Number.MAX_VALUE, minIndex = -1;
  for (var v = 0; v < dist.length; v++) {
    if (visited[v] == false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return minIndex;
};

// 1.先将所有的距离（dist）初始化到无限大，将visited[]初始化为false
// 2.把源顶点到自己的距离设为0
// 3.找出其他顶点的最短距离
// 4.需要在未处理的顶点中选出距离最近的顶点
// 5.把选出的顶点标记为visited，以免重复计算
// 6.如果找到了最短的路径{6},就更新最短路径的值{7}
// 8.处理完所有顶点之后，返回从源顶点（src）到图中其他顶点最短路径的结果


