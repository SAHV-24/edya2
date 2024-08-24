const Familiar = require('./Familiar.js')

class FamilyTree{

    constructor(){
        this.root;
    }

    search(name, current = this.root){
        if(!this.root)
            return null
        
        if(this.root.name === name)
            return this.root
        else{

            const childrens = current.childrens

            const isInChildren = childrens.find(child => child.name === name)

            if(isInChildren){
                return isInChildren; }
            else{

                let hasChild;

                childrens.forEach(child=>{

                    if(hasChild){
                        return;
                    }
                    hasChild = this.search(name,child)
                })

                return hasChild
            }
        }

    }

    insert(name, birthday, parent){
                
        let familiar = new Familiar(name,birthday,[]) 

        if(!this.root){
            this.root = familiar
        }else{

            let theParent = this.search(parent)
    
            if(theParent){
                theParent.childrens.push(familiar)
                return familiar
            }else{
                return false
            }
        }

    }

    preorder(current = this.root){
        if(!current)
            return;

        console.log(current.name)

        current.childrens.forEach(child=>this.preorder(child))        
    }

    postorder(current = this.root){
        if(!current)
            return;

        current.childrens.forEach(child=>this.postorder(child))   
        
        console.log(current.name)
    }

    inorder(current = this.root){
        if(!current){
            return
        }else{

            if(current.childrens.length != 0){
                this.inorder(current.childrens[0])
            }

            console.log(current.name)

            for(let i = 1; i< current.childrens;i++){
                this.inorder(current.childrens[i])
            }
        }

    }
    
}

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

myFamily.inorder()
