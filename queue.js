class Queue{

	// first is the head, last is the tail, if compared to singlyLinkedList
	constructor(){
		this.last = this.first = null;
		this.size = 0;
	}

	// add to the tail
	enqueue(val){
		let newNode = new Node(val);
		if(!this.size){
			this.first = this.last = newNode;
			return ++this.size;
		}
		this.last.next = newNode;
		this.last = newNode;
		return ++this.size;
	}

	// remove from the head
	dequeue(){
		if(!this.size){
			return null;
		}
		if(this.size === 1){
			let rNode = this.first;
			this.first = this.last = null;
			this.size--;
			return rNode.value;
		}
		let rNode = this.first;
		this.first = this.first.next;
		this.size--;
		return rNode.value;
	}
}

class Node{
	constructor(val){
		this.value = val;
		this.next = null;
	}
}

let q = new Queue();
q.enqueue("First");
q.enqueue("Second");
q.enqueue("Third");
console.log(q);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());



