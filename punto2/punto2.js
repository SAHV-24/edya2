const BinaryTree = require('./class/BinaryTree')

function main(){

    const treeZero = new BinaryTree()
    // tree without nodes:
    console.log("height:"+treeZero.height())


    setTimeout(
        ()=>{
            
            const treeOne = new BinaryTree()
        
            treeOne.insert(15)    
            treeOne.insert(9)
            treeOne.insert(6)
            treeOne.insert(14)    
            treeOne.insert(13)
            treeOne.insert(20)
            treeOne.insert(17)    
            treeOne.insert(64)
            treeOne.insert(26)
            treeOne.insert(72)    
        
            treeOne.preOrder()
        
            let height = treeOne.height() // You should see the treeOne img
        
            console.log(`The height will be of: ${height}`)
            
        }, 6000
    )

    setTimeout(
        ()=>{
            // second tree:
            let secondTree = new BinaryTree()
        
            secondTree.insert(6)
            secondTree.insert(1)
            secondTree.insert(2)
            secondTree.insert(3)
            secondTree.insert(4)
            secondTree.insert(5)
            secondTree.insert(8)
            secondTree.insert(9)
            secondTree.insert(7)
            secondTree.insert(10)
        
            secondTree.preOrder()
        
            height = secondTree.height()
            
            console.log(`The height will be of: ${height}`)
            
        }, 9000
    )


} 

main()