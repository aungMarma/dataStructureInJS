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

// level by level, level first before going to depth
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

// depth first, left first before right!
// left => root => right
// if you have a binary search tree and you do depthFirstSearchInorder you get a sorted array
function depthFirstSearchInorder(root){
	let storage = [];
	function recursiveInorder(root){
		// base case
		// found a leaf node
		// if(!root.left && !root.right){
		// 	storage.push(root.value);
		// 	return;
		// }
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
console.log(inorder);
// [ 8, 10, 12, 15, 20, 21, 25, 30 ]


// root => left => right
function depthFirstSearchPreorder(root){
	let storage = [];
	function recursivePreorder(root){
		storage.push(root.value);
		if(root.left){
			recursivePreorder(root.left);
		}
		if(root.right){
			recursivePreorder(root.right);
		}
	}
	recursivePreorder(root);
	return storage;
}

let bst01 = new BST();
bst01.insert(15);
bst01.insert(20);
bst01.insert(10);
bst01.insert(8);
bst01.insert(12);
bst01.insert(17);
bst01.insert(25);
/*
						15
		10							20
8				12			17				25
*/
let preorder = depthFirstSearchPreorder(bst01.root);
console.log(preorder);
// [ 15, 10, 8, 12, 20, 17, 25 ]

// left => right => root
function depthFirstSearchPostorder(root){
	let storage = [];
	function recursivePostorder(root){
		if(root.left){
			recursivePostorder(root.left);
		}
		if(root.right){
			recursivePostorder(root.right);
		}
		storage.push(root.value);
	}
	recursivePostorder(root);
	return storage;
}
/*
						15
		10							20
8				12			17				25
*/
let postorder = depthFirstSearchPostorder(bst01.root);
console.log(postorder);
// [ 8, 12, 10, 17, 25, 20, 15 ]


