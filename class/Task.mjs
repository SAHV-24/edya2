export class Task {
    constructor(title,description,next=null){
        this.title = title
        this.description = description,
        this.next = next
    }
}