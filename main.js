const GraphCF = require('./class/GraphCF')

function main(){

    // graphs
    graph = new GraphCF()
    
    // cities
    graph.addCity('cali')
    graph.addCity('bogotá')
    graph.addCity('Medellín')
    graph.addCity('Cuba')
    graph.addCity('Palmira')
    
    // people
    graph.addPerson('Sergio',19,'cali')
    graph.addPerson('Olga',12,'cali')
    graph.addPerson('Alejo',21,'Medellín')
    graph.addPerson('Mairo',23,'Cuba')
    graph.addPerson('José Daniel',20,'Palmira')

    // add some friends, make sure to send them as an object.
    graph.addFriend({name:"Alejo",city:"medellín"},{name:"sergio",city:'cali'})
    graph.addFriend({name:"Alejo",city:"medellín"},{name:"mairo",city:'cuba'})
    graph.addFriend({name:"Alejo",city:"medellín"},{name:"José Daniel",city:'Palmira'})
    graph.addFriend({name:"Alejo",city:"medellín"},{name:"Olga",city:'cali'})


    // who lives in...
    graph.whoLivesIn('Cali')
    graph.whoLivesIn('Palmira')
    graph.whoLivesIn('Medellín')
    graph.whoLivesIn('Cuba')
    // graph.whoLivesIn('Bogotá') // throws an error <-

    // let's show the friends of Alejo that is From Medellín ok?
    graph.friendsOf('Alejo','Medellín')  
    
}

main()