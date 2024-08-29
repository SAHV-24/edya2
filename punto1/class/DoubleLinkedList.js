const Node = require('./Node.js')

class DoubleLinkedList{
    constructor(){
        this.head = null
        this.root = null;
    }


    // 1.	Implementar una función que tenga como parámetros dos listas enlazadas de números ordenados de mayor a menor 
    // que retorne una nueva lista con la unión de ambas y sus elementos ordenados de menor a mayor.  

    merge(listOne, listTwo){
        
        const newList  = new DoubleLinkedList()

        let indexOne = listOne.head
        let indexTwo = listTwo.head

        while(indexOne || indexTwo){

            if(indexOne && indexTwo){

                if(indexOne.value <= indexTwo.value){
                    newList.append(indexOne.value)
                    indexOne = indexOne.next
                }
                else if(indexTwo.value < indexOne.value){
                    newList.append(indexTwo.value)
                    indexTwo = indexTwo.next
                }
            }
            
            else if(indexOne && !indexTwo){
                newList.append(indexOne.value)
                indexOne = indexOne.next
            }

            else if(!indexOne && indexTwo){
                newList.append(indexTwo.value)
                indexTwo = indexTwo.next
            }


        }

        return newList;


    }

    append(node){
        const newNode = new Node(node)

        if(!this.head){
            this.head = newNode
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail
        }

        this.tail = newNode;
    }

    peek(value, current = this.head){    

        if(this.head.value === value)
            return true

        if(current.next){
            return current.next.value === value ? true : this.peek(value, current.next)
        }
        return false
    
    }

    size(current = this.head, acum = 1){

        if(this.tail === null || this.head === null){
            return 0
        }else{
            if(current.next){
                acum +=1
                return this.size(current.next, acum)
            }
        }

        return acum
    }

    remove(value, current = this.head){
        if(this.head === null){
            return false
        }

        if(this.head.value === value){
            this.head = this.head.next
            this.head.prev = null
            return this.head
        }

        if(current.next){

            if(current.next.value === value){
                current.next = current.next.next
                if(current.next.prev){
                    current.next.prev = current
                }else{
                    this.tail = current
                }

            }else{
                return this.remove(value,current.next)
            }

        }


        

    }

    print(){

        let currentTask = this.head
        console.log()

        while(currentTask){
            console.log(`Value ${currentTask.value}`) 
            currentTask = currentTask.next      
        }

    }

}


module.exports = DoubleLinkedList