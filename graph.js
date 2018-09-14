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
}

let graph = new Grap();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "B");
console.log(graph.adjacencyList);
graph.removeEdge("A", "B");
console.log(graph.adjacencyList);
graph.removeVertex("C");
console.log(graph.adjacencyList);





