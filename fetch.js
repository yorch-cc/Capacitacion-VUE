fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res => res.json()) 
.then(data => {
   // console.log(data.results)
    data.results.forEach(element => {
       // console.log(element)
        
    }); 
 
})
.catch(error => console.log(error))

//async await 

const obtenerPokemones = async() => {
    try{
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await res.json()
      //console.log(data.results)
     //const arrayNombres =  data.results.map(poke => poke.name)
     const arrayFilter =data.results.filter(poke => poke.name !== 'bulbasaur')
      console.log(arrayFilter)
    } catch(error) {
        console.log(error)

    }

}
obtenerPokemones()


