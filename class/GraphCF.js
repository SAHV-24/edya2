const City = require('./City')
const Person = require('./Person')

class GraphCF{

    constructor(){

        this.nodes = []
        this.adjList = {}
    }

    addPerson(name, age, city){
        
        if(!(Object.keys(this.adjList).find(c => c === city.toLowerCase())) ){
            console.log(`${city} doesn't exist`)
            throw new Error(`${city} doesn't exist, you have to create it`)
        }
            
        else{
            const obj = new Person(name.toLowerCase(),age,city)
    
            this.adjList[city.toLowerCase()][obj.name] = []
            this.nodes.push(obj)
    
            return obj;    

        }
        
    }

    addCity(name){

        if(name.toLowerCase() in Object.keys(this.adjList)){
            return
        }

        const city = new City(name.toLowerCase())

        this.adjList[city.name.toLowerCase()] = {} // adjList
        this.nodes.push(city)

        return city        
    }

    search(node){
        return this.nodes.find(n => n.name === node.toLowerCase()) ? true : false
    }


    addFriend(node1, node2){

        node1.name = node1.name.toLowerCase()
        node1.city = node1.city.toLowerCase()
        node2.name = node2.name.toLowerCase()
        node2.city = node2.city.toLowerCase()

        if(this.search(node1.name) && this.search(node2.name) && this.search(node1.city) && this.search(node2.city)){
           try{
               
               this.adjList[node1.city][node1.name].push(node2) // adds the object with the attributes of name and city 
               this.adjList[node2.city][node2.name].push(node1) // (Oscar from bogotá is different from the one of cali)
           }catch(TypeError){
                console.log('verify your entries')
                return
           }
        }

    }

    whoLivesIn(city){

        if(this.adjList[city] !==  null ){
            console.log(`People who live in ${city.toUpperCase()}`);
            for (let people of Object.keys(this.adjList[city.toLowerCase()])){
                console.log(people)
            }
            console.log()
        }
        else{
            throw new Error('ERROR: City not found')
        }
        

        
    }


    friendsOf(name, city){

        name = name.toLowerCase()
        city = city.toLowerCase()

        if(this.search(name) && this.search(city)){
            
            if(this.adjList[city][name]){
                console.log(`The friends of ${name} from ${city} are:`)
                let res = ""

                for(let friend of Object.values(this.adjList[city][name])){
                    res += `${friend.name.toUpperCase()} from: ${friend.city}\n`
                }

                console.log(res)
            }else{
                console.log("Not found :(")
            }
        }

    }


}

module.exports = GraphCF


