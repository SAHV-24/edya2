// Create and handle new stack of books: 
    // [] Every book must have its Name, ISBN, Author and Editorial
    // [] Fill the stack with some examples of data

class BookStack{

    constructor(){
        this.stack = {}
        this.count = 0
    }

    push(Name,ISBN,Author,Editorial){
        return this.stack[this.count++] = {Name,ISBN,Author,Editorial}
    }

    pop(){
        this.count -= 1
        const obj = this.stack[this.count]
        delete this.stack[this.count]
        return obj
    }

    size(){
        return this.count
    }

    peek(){
        return this.stack[this.count-1] ? true:  false
    }


    print(){
        for (let obj of Object.values(this.stack)){
            console.log(
`Name: ${obj.Name}
ISBN: ${obj.ISBN}
Author: ${obj.Author}
Editorial: ${obj.Editorial}\n`)
        }
    }


}



/// 
const bookStack = new BookStack()


bookStack.push('El amor en tiempos de colera',123,'Gabriel García Márquez','Editorial Planeta')
bookStack.push('La chica del Tren',456,'Rachel Hawk','Casa del Libro')
bookStack.push('Cálculo de Larson',789,'Ron Larson','McGrawHill')

console.log(bookStack.size()) // returns 3
console.log(bookStack.pop()) // deletes Cálculo de Larson and returns it
console.log(bookStack.peek()) // returns true
console.log(bookStack.size()) // returns 2

bookStack.print()


