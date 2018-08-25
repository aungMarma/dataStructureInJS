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
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this; 
	}
	// my approach
	// remove from the tail
	pop(){
		// nothing to remove
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
	}
	// colt's approach
	popAnotherWay(){
		if(!this.head){
			return;
		}else{
			let current = this.head;
			if(this.head === this.tail){
				this.head = this.tail = null;
			}else{
				let prev = this.head;
				// current stops at current.next ==== null;
				// and prev stops at current
				while(current.next){
					prev = current;
					current = current.next;
				}
				this.tail = prev;
				this.tail.next = null;
			}
			this.length--;
			return current;
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
			let re = this.head;
		   if(this.head === this.tail){
		   		this.head = this.tail = null;
		   }else{
		   		this.head = this.head.next
		   }
		   this.length--;
		   return re;
		}
	}
	// add a node to the head
	unshift(val){
		let newNode = new Node(val);
		if(!this.head){
			this.head = this.tail = newNode;
		}else{
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
}

class Node{
	constructor(value){
		this.next = null;
		this.value = value;
	}
}
