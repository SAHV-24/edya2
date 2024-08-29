const DoubleLinkedList = require('./class/DoubleLinkedList.js')

function main(){    

    const listOne = new DoubleLinkedList()
    const listTwo = new DoubleLinkedList()

    // adding [1,3,5,7]
    listOne.append(1)
    listOne.append(3)
    listOne.append(5)
    listOne.append(7)

    
    // adding [2,8,14,20]
    listTwo.append(2)
    listTwo.append(8)
    listTwo.append(12)
    listTwo.append(20)
    listTwo.append(140)
    listTwo.append(1333)

    // 1.	Implementar una función que tenga como parámetros dos 
    // listas enlazadas de números ordenados de mayor a menor y que retorne una nueva lista con
    // la unión de ambas y sus elementos ordenados de menor a mayor.  
    
    
    const newList = listOne.merge(listOne,listTwo)

    newList.print()
}


main()