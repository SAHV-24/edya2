import { Task } from "./Task.mjs";


export class LinkedTask{
    
    constructor(head=null,tail=null){
        this.head = head,
        this.tail = tail
    }

    append(title, description){
        const newTask = new Task(title,description)

        if(!this.head){
            this.head = newTask;
        }else{
            this.tail.next = newTask
        }

        this.tail = newTask
    }

    remove(title,current = this.head){
        
        if(title === this.head.title){
            this.head = this.head.next 
            return true
        }
        
        if(current.next !== null){

            if(current.next.title === title){
                
                if(current.next === this.tail){
                    this.tail = current}

                current.next = current.next.next
                return true
            }else{
                return this.remove(title, current.next)
            }
        }
        
        return false
    }

   
    peek(title, current = this.head){        
        if(this.head.title === title)
            return true

        if(current.next){
            return current.next.title === title ? true : this.peek(title, current.next)
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


    print(){

        let currentTask = this.head
        console.log()

        while(currentTask){
            console.log(`Current task: ${currentTask.title}, next task: ${currentTask.next?.title ||"END"}`) 
            currentTask = currentTask.next      
        }

    }
    
}

