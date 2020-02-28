let listaDePets = []


 function adicionarPets(nomePet){
    
    listaDePets.push(nomePet)
    console.log(listaDePets)
    return true 
}


module.exports = {adicionarPets}
