class SinglyLinkedList{
	constructor(){
		this.head = this.tail = null;
		this.length = 0;
	}
	// add to the tail
	push(value){
		let newNode = new Node(value);
		if(!this.length){   // or !this.head
			this.head = this.tail = newNode;
		}else{
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this; 
	}
	// remove from the tail, my approach
	pop(){
		// nothing to remove
		if(!this.head){
			return null;
		}
		// must be only one node
		if(this.head === this.tail){
			let removedNode = this.head;   // or tail
			this.head = this.tail = null;
			this.length--;
			return removedNode;
		}
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
	// colt's approach
	popAnotherWay(){
		if(!this.head){
			return null;
		}
		let current = this.head;
		if(this.head === this.tail){
			this.head = this.tail = null;
		}else{
			let prev = this.head;
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
	// print each node
	printEachNode(){
		let tempNode = this.head;
		console.log(tempNode.value);
		while(tempNode.next){
			tempNode = tempNode.next;
			console.log(tempNode.value);
		}
	}
	// remove a node from the head
	shift(){
		if(!this.head){
			return null;
		}
	   let removedNode = this.head;
	   if(this.head === this.tail){
	   		this.head = this.tail = null;
	   }else{
	   		this.head = this.head.next;
	   }
	   this.length--;
	   return removedNode;
	}
	// add a node to the head
	unshift(value){
		let newNode = new Node(value);
		if(!this.head){
			this.head = this.tail = newNode;
		}else{
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
    // get nth node, 0 indexed
    get(index){
    	if(index < 0 || index >= this.length){
    		return null;
    	}
    	let nodeToReturn = this.head;
		let currentNodeIndex = 0;
    	while(currentNodeIndex !== index){
    		nodeToReturn = nodeToReturn.next;
    		currentNodeIndex++;
    	}
    	return nodeToReturn;
    }
    // set the value, update the value of a specific node
    set(value, index){
    	let nodeToSetValue = this.get(index);
    	if(!nodeToSetValue){
    		return false;
    	}
    	nodeToSetValue.value = value;
    	return true;
    }
    // insert a node at a specific index
    insert(value, index){
    	if(index < 0 || index > length){
    		return false;
    	}
		if(index === 0){
			this.unshift(value);
			return true;
		}
		if(index === this.length){
			this.push(value);
			return true;
		}
		let newNode = new Node(value);
		// let leftNode = this.get(index - 1);
		// let rightNode = this.get(index);
		// newNode.next = rightNode;
		// leftNode.next = newNode;

		// another way with temp
		let leftNode = this.get(index  - 1);
		let tempNode = this.next; // save the pointer to the right node
		leftNode.next = newNode;
		newNode.next = tempNode;
		this.length++;
		return true;
    }
    // remove a node at a specific index
    remove(index){
    	if(index < 0 || index >= this.length){
    		return null;
    	}
    	if(index === 0){
    		let removedNode = this.head;
    		this.shift();
    		return removedNode;

    	}
    	if(this.length - 1 === index){
    		let removedNode = this.tail;
    		this.pop();
    		return removedNode;
    	}
    	let leftNode = this.get(index  - 1);
    	let removedNode = leftNode.next;
    	leftNode.next = removedNode.next;
    	this.length--;
    	return removedNode;
    }
    // reverse the list
    reverse(){
		
		// swap head and tail
    	let tempTail = this.tail;
    	this.tail = this.head;
    	this.head = tempTail;

    	// hold next node, prev node, update current
    	let current = this.tail;
		let tempNext = current.next;
		current.next = null;
		let prev = current;     // save current before moving to next
		current = tempNext;

		while(current){
			// move to next node
	    	tempNext = current.next;
	    	current.next = prev;
	    	prev = current;
			current = tempNext;
		}
		return this;
	}
	rotate(n){
        if(n > this.length){
            n = n % this.length;
        }
        if(n < 0){
            n = this.length - ( -1 * n);
        }
        if(n === 0 || n === this.length){
            return this;
        }
        let m = 1;
        let left = this.head;
        let tempHead = this.head;
        while(n !== m){
            left = left.next;
            m++;
        }
        
        let right = left.next;
        left.next = null;        // cut the connection
        this.head = right;       // move the head
        this.tail.next = tempHead;         // join the tail to the previous head
        this.tail = left;                  // move the tail
        return this;
    }
}

class Node{
	constructor(value){
		this.next = null;
		this.value = value;
	}
}

// module.exports = {
// 	Node,
// }








