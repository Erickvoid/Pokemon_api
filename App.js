let lista = document.getElementById('listaPokemon')




function ConsultarPokemon(id, num) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(function (response) {
    response.json()
    .then(function (pokemon) 
    {
    crearPokemon (pokemon, num)
});

});

}

//ConsultarPokemon(26)

function consultarPokemones() {
  let primerId = Math.round(Math.random() * 150)
  let segundoId = Math.round(Math.random() * 150)
  
  ConsultarPokemon(primerId, 1)
  ConsultarPokemon(segundoId, 2)
}

function crearPokemon(pokemon, num) {
  //convertir la data en html 
  let item = lista.querySelector(`#pokemon-${num}`)
  
  let imagen = item.getElementsByTagName("img")[0]
  imagen.setAttribute("src", pokemon.sprites.front_shiny)
  let nombre = item.getElementsByTagName("p")[0]
  nombre.textContent = pokemon.name
  let altura = item.getElementsByTagName("p")[1]
  altura.textContent = pokemon.height
  let nivel = item.getElementsByTagName("p")[2]
  nivel.textContent = pokemon.base_experience
  let niv = item.getElementsByTagName("p")[3]
  niv.textContent = pokemon.base_experience
}

consultarPokemones();

    