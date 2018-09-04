let { BST, Node } = require("./binarySearchTree.js");
// let { Queue } = require("./queue.js");


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
// console.log(result);
// [10, 5, 15, 1, 6, 12, 20];

// if you have a binary search tree and you do depthFirstSearchInorder you get a sorted array
function depthFirstSearchInorder(root){
	// left root right
	let storage = [];
	function recursiveInorder(root){
		// base case
		// found a leaf node
		if(!root.left && !root.right){
			storage.push(root.value);
			return;
		}
		if(root.left){
			recursiveInorder(root.left);
		}
		storage.push(root.value);
		if(root.right){
			recursiveInorder(root.right);
		}
	}
	recursiveInorder(root);
	return storage;
}

let bst00 = new BST();
bst00.insert(20);
bst00.insert(15);
bst00.insert(10);
bst00.insert(8);
bst00.insert(12);
bst00.insert(25);
bst00.insert(21);
bst00.insert(30);

let inorder = depthFirstSearchInorder(bst00.root);
console.log(bst00);
console.log(inorder);



