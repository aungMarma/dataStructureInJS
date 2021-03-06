class Node{
	constructor(value){
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BST{
	constructor(){
		this.root = null;
	}
	insert(value){
		let node = new Node(value);
		if(!this.root){
			this.root = node;
			return this;
		}
		// recursively
		function insertRecursively(root, node){
			if(node.value === root.value){
				return undefined;
			}
			// insert at left
			if(node.value < root.value){
				if(!root.left){
					root.left = node;
					return this;
				}
			    return  insertRecursively(root.left, node);
			}
			// insert at right
			if(!root.right){
					root.right= node;
					return this;
				}
			return  insertRecursively(root.right, node);
		}
		return insertRecursively(this.root, node);
	}
	insertIteratively(value){
		let node = new Node(value);
		if(!this.root){
			this.root = node;
			return this;
		}
		let current = this.root;
		while(true){
			if(node.value === current.value){
				return undefined;
			}
			if(node.value < current.value){
				if(!current.left){
					current.left = node;
					return this;   // break the loop
				}
				current = current.left; 
			}else{
				if(!current.right){
					current.right = node;
					return this;    // break the loop
				}
				current = current.right;
			}
		}
	}
	find(value, node = this.root){
		if(!node){  // no root
			return false;
		}
		if(value === node.value){
			return true;
		}
		if(value < node.value){
			if(!node.left){  // no node to keep searching
				return false;
			}
			node = node.left;
		}
		if(value > node.value){
			if(!node.right){  // no node to keep searching
				return false;
			}
			node = node.right;
		}
		return this.find(value, node);
	}
	findIteratively(value){
		if(!this.root){
			return false;
		}
		let current = this.root;
		while(current){
			if(current.value === value){
				return true;
			}
			// go left
			if(value < current.value){
				current = current.left;
			}
			// go right
			current = current.right
		}
		return false;
	}
}

// let bst = new BST();
// bst.insert(10);
// bst.insert(5);
// bst.insert(1);
// bst.insert(8);
// bst.insert(15);
// bst.insert(25);
// bst.insert(12);
// console.log(bst.find(25));
// console.log(bst.find(100));
// console.log(bst.findIteratively(25));
// console.log(bst.findIteratively(100));

module.exports = {
	Node,
	BST,
}

