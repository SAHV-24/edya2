import { LinkedTask } from "./class/LinkedTask.mjs"

function main(){
    
    const tasks = new LinkedTask()

    // Add tasks
    tasks.append('Wake Up','Open your eyes! :O')
    tasks.append('Stand Up','Put your feet on the ground, push it down and then you can start your day! :D')
    tasks.append('Brush Teeths','Grab a brush, add some toothpaste and then brush it into your teeths')
    tasks.append('Eat',"Bruh,we don't have to explain that, do we?")
    tasks.append('Take a shower','Open your shower and then let the water flow all over your body')

    // Print list
    tasks.print()

    // List size:
    console.log(`\nLinkedTasks size: ${tasks.size()}`)
    
    // Remove tasks:
    tasks.remove('Wake Up') // as you delete the head, it should display the right head
    console.log(`\nNew HEAD: "${tasks.head.title}"`)
   
    // peek for "Eat"}
    console.log(`\nIs Eat on the List? == ${tasks.peek('Eat')}\n`)

}

main()
   
