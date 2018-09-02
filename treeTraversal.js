let { BST, Node } = require("./binarySearchTree.js");
let { Queue } = require("./queue.js");


let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(12);
bst.insert(20);
bst.insert(1);
bst.insert(6);

function breadthFirstSearchTraversal(root) {
	let queue = [];   // push, shift
	let storage = [];


	let current = root;
	queue.push(current);
	while(queue.length){

		// process current root
		current = queue.shift();
		storage.push(current.value);

		// store children to queue, left and right node
		if(current.left){
			queue.push(current.left);
		}
		if(current.right){
			queue.push(current.right);
		}
	}
	return storage;
}

let result = breadthFirstSearchTraversal(bst.root);
console.log(result);
// [10, 5, 15, 1, 6, 12, 20];