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

		/*
		// iteratively
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
		*/
	}
}

let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(1);
bst.insert(8);
bst.insert(15);
bst.insert(25);
bst.insert(12);
/*
        	10
	5				15
1     8			12		25				
*/

