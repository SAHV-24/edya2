const Node = require('./Node.js')

class DoubleLinkedList{

    constructor(){
        this.head = null
        this.tail = null;
    }

    merge(listOne, listTwo){
        
        const newList  = new DoubleLinkedList()

        // counters
        let indexOne = listOne.tail
        let indexTwo = listTwo.tail

        // ANY of the lists STILL have elements?
        while(indexOne || indexTwo){

            // both lists has elements?
            if(indexOne && indexTwo){

                if(indexOne.value <= indexTwo.value){
                    newList.append(indexOne.value)
                    indexOne = indexOne.prev
                }
                else if(indexTwo.value < indexOne.value){
                    newList.append(indexTwo.value)
                    indexTwo = indexTwo.prev
                }
            }            

            // in case one of them is empty, then:
            else if(indexOne && !indexTwo){
                newList.append(indexOne.value)
                indexOne = indexOne.prev
            }

            else if(!indexOne && indexTwo){
                newList.append(indexTwo.value)
                indexTwo = indexTwo.prev
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


    print(){

        let currentTask = this.head
        if(!currentTask)
            return

        console.log()
        let res = "Null "

        while(currentTask){
            res += `<-  ${currentTask.value}  ->` 
            currentTask = currentTask.next      
        }

        res += " Null"

        console.log(res)
    }

}


module.exports = DoubleLinkedList