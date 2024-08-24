const FamilyTree = require('./FamilyTree')

function main (){

    // declare myFamily
    let myFamily = new FamilyTree()
    
    myFamily.insert('Mechas','12')
    myFamily.insert('Oscar','2','Mechas')
    myFamily.insert('Camilo','2','Mechas')
    myFamily.insert('Vane','2','Mechas')
    myFamily.insert('Sergio','2','Oscar')
    myFamily.insert('Sebastián','2','Oscar')
    myFamily.insert('Lance','2','Vane')
    myFamily.insert('Juanda','2','Camilo')
    myFamily.insert('Majo','2','Camilo')
    
    console.log('Searching for Sergio...\n',myFamily.search('Sergio'))


    setTimeout(()=>{
        console.log('\nPreorder\n')
        myFamily.preorder()    
    }, 3000)

    setTimeout(()=>{
        console.log('\nPostorder\n')
        myFamily.postorder()    
    }, 6000)

    setTimeout(()=>{
        console.log('\nInorder\n')
        myFamily.inorder()    
    }, 10000)

    }

main()