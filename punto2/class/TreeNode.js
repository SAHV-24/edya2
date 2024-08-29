class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }

    isLeaf(){
        if(this.left === null && this.right === null){
            return true
        }else{
            return false
        }
    }
}

module.exports = TreeNode