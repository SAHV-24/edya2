class Task {
    constructor(title,description,next=null){
        this.title = title
        this.description = description,
        this.next = next
    }
}

class LinkedTask{
    
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
        // TODO
    }

   
    peek(title, current = this.head){
        // TODO 
    }

    size(current = this.head, acum = 1){
        // TODO (tener en cuenta que si la lista está vacía, entonces retornar acum = 0, trin)

        if(this.tail === null || this.head === null){
            return 0
        }else{
            
        }

        return acum
    }


    print(){

        let currentTask = this.head

        while(currentTask){
            console.log(`Current task: ${currentTask.title}, next task: ${currentTask.next?.title ||"END"}`) 
            currentTask = currentTask.next      
        }

    }
    
}

function main(){
    
    const tasks = new LinkedTask()

    
    tasks.append('Wake Up','Open your eyes! :O')
    tasks.append('Stand Up','Put your feet on the ground, push it down and then you can start your day! :D')
    tasks.append('Brush Teeths','Grab a brush, add some toothpaste and then brush it into your teeths')
    tasks.append('Eat',"Bruh,we don't have to explain that, do we?")
    tasks.append('Take a shower','Open your shower and then let the water flow all over your body')
    console.log(tasks.remove('Wake Up'))

    // print
    tasks.print()

}


main()
   
