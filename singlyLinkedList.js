class SinglyLinkedList{
	constructor(){
		this.head = this.tail = null;
		this.length = 0;
	}
	// add to the tail
	push(val){
		let newNode = new Node(val);
		if(!this.length){   // or !this.head
			this.head = this.tail = newNode;
		}else{
			// establish the connection, tail node points to new node
			this.tail.next = newNode;
			// update the tail, new node is the tail node now, we got new tail node
			this.tail = newNode;
		}
		this.length++;
		return this; 
	}
	// addToHead
	addToHead(node){
		this.length++;
		if(!this.length){
			this.head = this.tail = node;
		}else{
			// point to the head node, update the head
			node.next = this.head;
			this.head = node;
		}
	}
	/*
	// my approach
	// remove from the tail
	pop(){
		// must be only one node
		if(this.head === null){
			return;
		}
		// must be only one node
		if(this.head === this.tail){
			let removedNode = this.head;   // or tail
			this.head = this.tail = null;
			this.length--;
			return removedNode;
		}else{
			let tempNode = this.head;
			while(tempNode.next){
				// reached at the tail node
				if(tempNode.next.next === null){
					let removedNode = tempNode.next;
					this.tail = tempNode;
					tempNode.next = null;
					this.length--;
					return removedNode;
				}
				tempNode = tempNode.next;
			}
		}
	}*/
	// colt's approach
	pop(){
		if(!this.head){
			return;
		}else{
			if(this.head === this.tail){
				let re = this.head;
				this.head = this.tail = null;
				this.length--;
			}else{
				let prev = this.head;
				let current = this.head;

				// current stops at current.next ==== null;
				// and prev stops at current
				while(current.next){
					prev = current;
					current = current.next;
				}
				this.tail = prev;
				this.tail.next = null;
				this.length--;
				return current;
			}
		}
	}
	printEachNode(){
		let tempNode = this.head;
		console.log(tempNode);
		while(tempNode.next){
			tempNode = tempNode.next;
			console.log(tempNode);
		}
	}
	// remove a node from the head
	shift(){
		if(!this.head){
			return;
		}else{
		   if(this.head === this.tail){
		   		let re = this.head;
		   		this.head = this.tail = null;
		   		this.length--;
		   		return re;
		   }else{
		   		let re = this.head;
		   		this.head = this.head.next
		   		this.length--;
		   		return re;
		   }
		}
	}
}

class Node{
	constructor(value){
		this.next = null;
		this.value = value;
	}
}
/*
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next= new Node(5);
*/
