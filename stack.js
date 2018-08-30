// let { Node } = require("./singlyLinkedList.js");
class Node{
	constructor(val){
		this.value = val;
		this.next = null;
	}
}
class Stack{

	// first is the head, last is the tail if compared to the linkedList
	constructor(){
		this.last = this.first = null;
		this.size = 0;
	}

	// add to the head
	push(val){
		let newNode = new Node(val);
		if(!this.size){
			this.first = this.last = newNode;
			return ++this.size;
		}
		// added to the last/head,
		newNode.next = this.first;
		this.first= newNode;
		return ++this.size;
	}

	// remove from the head/last
	pop(){
		if(!this.size){
			return null;
		}
		if(this.size === 1){
			let rNode = this.first;
			this.last = this.first = null;
			this.size--;
			return rNode.value;
		}

		let rNode = this.first;
		this.first = this.first.next;
		this.size--;
		return rNode.value;
	}
}

let stack = new Stack();
stack.push("First");
stack.push("Second");
stack.push("Third");
console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
