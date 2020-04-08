const newTrainerBtn = document.getElementById("newTrainer")
const nextPokemonsBtn = document.getElementById('nextBtnPokemonsBtn')
const previusPokemonsBtn = document.getElementById('previusPokemonsBtn')
const pokemonListContainer = document.getElementById('pokemonListContainer')
const addToTeamBtn = document.getElementById('addToTeamBtn')
const pokemonInfo = document.getElementById('pokemonInfo')
const teamContainer = document.getElementById('teamContainer')

function getTrainer() {trainerApp.getTrainer()}
function nextPokemons(){pokemonApp.pagination(true)}
function previusPokemons(){pokemonApp.pagination(false)}
function pokemonDetails(){pokemonApp.getPokemon(event.target.id)}

function addToTeam(){
    teamApp.addToTeam(
        pokemonApp.getPokemonJson(pokemonInfo.children[0].getAttribute("pokemonid"))
    )
}

function removeToTeam(){
    if (event.target.getAttribute('remove') == "true") {
        teamApp.removeToTeam(event.target.getAttribute('teamIndex'))
    }else{
        pokemonApp.getPokemon(event.target.getAttribute('pokemonId'))
    }
    
}


newTrainerBtn.addEventListener("click", getTrainer)
nextPokemonsBtn.addEventListener("click", nextPokemons)
previusPokemonsBtn.addEventListener("click", previusPokemons)
pokemonListContainer.addEventListener("click", pokemonDetails)
addToTeamBtn.addEventListener("click", addToTeam)
teamContainer.addEventListener("click", removeToTeam)