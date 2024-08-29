const Node = require('./TreeNode.js')

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value, null, null);

        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            let isFound = false;

            while (!isFound) {
                if (current.value === value) {
                    isFound = true;
                    return this;
                }

                if (current.value > value) {
                    if (!current.left) {
                        current.left = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    preOrder(node = this.root){
        if(!node)
            return

        console.log(node.value);

        this.preOrder(node.left)
        this.preOrder(node.right)
    }


    height(current = this.root, array = [], acum = 0){

        if(!this.root){ // if there's any node, return -1
            return -1
        }

        if(acum > 0){ // if it is counting, then...

            if(current.isLeaf()){ // base case, when it gets to the leaf.
                array.push(acum)
                return array
               
            }else{

                if(current.left && !current.right){ // if the node only has something on the left, then it shall move there
                    return  this.height(current.left, array, acum + 1)
                }
                if(current.right && !current.left){ // if the node only has something on the left, then it shall move there
                    return this.height(current.right,array,acum + 1)
                }

                if(current.right && current.left){ // if boths of them have, so concat them up.
                    return  this.height(current.left, array, acum + 1).concat(this.height(current.right,array,acum + 1))
                }
               
            }
        }else{

            let left = current.left?this.height(current.left, array, acum + 1):[]
            let right = current.right?this.height(current.right, array, acum + 1):[]

            // we put together both arrays and then, they'll get sorted in desc order, 
            // then, the first element of it will be the highest level of the tree
            return Math.max(...left.concat(right))

        }

    }

}


module.exports = BinaryTree