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
       
       if(!current)
            return;

        if(current.childrens.length === 0)
            console.log(current.name)
        else{
            this.inorder(current.childrens[0])
            console.log(current.name)

            for (let index = 1; index < current.childrens.length; index++) {
                this.inorder(current.childrens[index])                
            }

        }
    }
}

module.exports = FamilyTree