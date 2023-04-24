class Graph<T> {
  // 顶点
  private verteces: T[] = [];
  // 顶点的边的描述
  private adjList: Map<T, T[]> = new Map();

  /**添加顶点的方法 */
  addVertex(vertex: T) {
    // 将顶点添加到数组中保持
    this.verteces.push(vertex);
    // 在映射关系的map中创建对应的顶点描述
    this.adjList.set(vertex, []);
  }

  /**添加边的方法 */
  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2);
    this.adjList.get(v2)?.push(v1);
  }

  tracerse() {
    console.log("Graph:");
    this.verteces.forEach((vertex) => {
      const edges = this.adjList.get(vertex);

      console.log(`${vertex} -> ${edges?.join()}`);
    });
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");
graph.addVertex("I");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.tracerse();

export default Graph;
