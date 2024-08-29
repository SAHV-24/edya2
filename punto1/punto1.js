const DoubleLinkedList = require('./class/DoubleLinkedList.js')

function main(){    

    const listOne = new DoubleLinkedList()
    const listTwo = new DoubleLinkedList()

    // [7,5,3,1]
    listOne.append(7)
    listOne.append(5)
    listOne.append(3)
    listOne.append(1)
    

    console.log()
    console.log("first list:")
    listOne.print()

    // [1333, 140, 20, 12, 8, 2]
    listTwo.append(1333)
    listTwo.append(140)
    listTwo.append(20)
    listTwo.append(12)
    listTwo.append(8)
    listTwo.append(2)

    console.log()
    console.log("second list:")
    listTwo.print()    
    
    const newList = listOne.merge(listOne,listTwo)

    console.log()
    console.log("merged list:")
    newList.print()
    
}


main()