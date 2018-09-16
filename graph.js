// basic undirected graph
class Grap{
	constructor(){
		this.adjacencyList = {};
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex]){
			this.adjacencyList[vertex] = [];
		}
	}
	addEdge(vertex1, vertex2){
		if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
			this.adjacencyList[vertex1].push(vertex2);
			this.adjacencyList[vertex2].push(vertex1);
		}
	}
	removeEdge(vertex1, vertex2){
		if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( vertex => vertex !== vertex2);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( vertex => vertex !== vertex1);
		}
	}
	removeVertex(vertex){
		if(this.adjacencyList[vertex]){
			// remove edge that are connected to given vertex
			this.adjacencyList[vertex].forEach( v => {
				this.adjacencyList[v] = this.adjacencyList[v].filter( v => v !== vertex);
			});
			// finally remove the vertex
			delete this.adjacencyList[vertex];
		}
	}
	// colt's approach
	removeVertex(vertex){
		if(this.adjacencyList[vertex]){
			while(this.adjacencyList[vertex].length){
				const adjacentVartex = this.adjacencyList[vertex].pop();
				this.removeEdge(vertex, adjacentVartex);
			}
			delete this.adjacencyList[vertex];
		}
	}
	dfs(vertex, result = [], visited = {}){
		if(!this.adjacencyList[vertex]){
			return;
		}
		let edges = this.adjacencyList[vertex];
		// nowhere to go
		if(!edges.length){
			return;
		}
		result.push(vertex);
		visited[vertex] = true;
		edges.forEach( neighbor => {
			if(!visited[neighbor]){
				this.dfs(neighbor, result, visited);
			}
		})
		return result;
	}
	dfsIterative(vertex){
		if(!this.adjacencyList[vertex] || !this.adjacencyList[vertex].length){
			return;
		}
		let stack = [vertex];    // process last in
		let visited = {};
		let result = [];
		visited[vertex] = true;
		let currentVertex;
		while(stack.length){
			currentVertex = stack.pop();
			result.push(currentVertex);
			this.adjacencyList[currentVertex].forEach( neighbor => {
				if(!visited[neighbor]){
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			})
		}
		return result;
	}
}

let graph = new Grap();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.adjacencyList);
// graph.removeEdge("A", "B");
// console.log(graph.adjacencyList);
// graph.removeVertex("C");
// console.log(graph.adjacencyList);
let resultStartA = graph.dfs("A");
let resultStartB = graph.dfs("B");
let resultStartE = graph.dfs("E");
console.log(resultStartA);
console.log(resultStartB);
console.log(resultStartE);

let dfsIterativeA = graph.dfsIterative("A");
console.log(dfsIterativeA);






