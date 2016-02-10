'use strict';

class BinaryTree {
	constructor() {
		this.root = null;

	}

	insert(data) {
		var node = this.root;

		if (!node) {
			this.root = new Node(data);
		}

		while (node) {
			if (node.data > data) {
				if (node.left)
					node = node.left;
				else {
					node.left = new Node(data);
					break;
				}
			}
			if (node.data < data) {
				if (node.right)
					node = node.right;
				else {
					node.right = new Node(data);
					break;
				}
			}
		}

	}

	contains(data) {
		var node = this.root;

		if (!node)
			return false;

		while (node) {
			if (node.data == data) {
				return true;
			}
			else if (node.data > data) {
				node = node.left;
			}
			else if (node.data < data){
				node = node.right;
			}
		}
		return false;

	}

	remove(data) {
		var min = function(node) {
			if (node.left == null) {
				return node;
			}
			return min(node.left);
		}

		var del = function(data, node) {
			if (node) {
				if (node.data > data) {
					node.left = del(data, node.left);
				} 
				else if (node.data < data) {
					node.right = del(data, node.right);
				} 
				else if (node.left && node.right) {
					node.data = min(node.right).data;
					node.right = del(node.data, node.right);
				} else {
					node = node.left || node.right;
				}
			}
			return node;
		}

		this.root = del(data, this.root);

	}

	size() {
		var count = 0;

		var traverse = function(node) {
			if (node) {
				if (node.left)
					traverse(node.left);
				if (node.right)
					traverse(node.right)
				count++;
			}
			return count;
		}

		var node = this.root;

		if (!node)
			return 0;
		else
			return traverse(node);

	}

	isEmpty() {
		return this.root == null

	}
}
