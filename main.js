const Queue = require('./Queue')
const Person = require('./Person')


function main (){

    const p1 = new Person("Sergio", 7)
    const p2 = new Person("Jean Paul", 8)
    const p3 = new Person("Jonathan", 9)

    const peopleQueue = new Queue()

    console.log("is it empty?",peopleQueue.isEmpty())

    // 
    peopleQueue.enqueue(p1)
    peopleQueue.enqueue(p2)
    peopleQueue.enqueue(p3)

    console.log("size:",peopleQueue.size())
    console.log("shift:",peopleQueue.unqueue())
    console.log("New size:",peopleQueue.size())

    // print
    peopleQueue.print()
    
}

main()
