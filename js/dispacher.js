const newTrainerBtn = document.getElementById("newTrainer")
const nextPokemonsBtn = document.getElementById('nextBtnPokemonsBtn')
const previusPokemonsBtn = document.getElementById('previusPokemonsBtn')
const pokemonListContainer = document.getElementById('pokemonListContainer')

function getTrainer() {trainerApp.getTrainer()}
function nextPokemons(){pokemonApp.pagination(true)}
function previusPokemons(){pokemonApp.pagination(false)}
function pokemonDetails(){pokemonApp.getPokemon(event.target.id)}

newTrainerBtn.addEventListener("click", getTrainer)
nextPokemonsBtn.addEventListener("click", nextPokemons)
previusPokemonsBtn.addEventListener("click", previusPokemons)
pokemonListContainer.addEventListener("click", pokemonDetails)