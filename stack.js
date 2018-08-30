// let { Node } = require("./singlyLinkedList.js");
class Node{
	constructor(val){
		this.value = val;
		this.next = null;
	}
}
class Stack{
	constructor(){
		// last points to the last node added on
		// first points to the first node that was added to the stack
		this.last = this.first = null;
		this.size = 0;
	}
	push(val){   // add to head O(1), instead of to the tail O(n)
		let newNode = new Node(val);
		if(!this.size){
			this.first = this.last = newNode;
			return ++this.size;
		}
		// added to the last/head,
		newNode.next = this.last;
		this.last = newNode;
		return ++this.size;
	}
	pop(){   // remove from the head/last
		if(!this.size){
			return null;
		}
		if(this.size === 1){
			let rNode = this.last;
			this.last = this.first = null;
			this.size--;
			return rNode.value;
		}

		let rNode = this.last;
		this.last = this.last.next;
		this.size--;
		return rNode.value;
	}
	size(){
		return this.size;
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
