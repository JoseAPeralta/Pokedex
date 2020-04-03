class PokemonView{
    constructor(){
        this.pokemonListContainer = document.querySelector('#pokemonListContainer')
        this.pokemonInfo = document.querySelector('#pokemonInfo')
    }

    resetListContainer(){
        this.pokemonListContainer.innerHTML = ``
    }
    
    async renderPokemons(data){
        const pokemon = await data
        try {
            this.pokemonListContainer.innerHTML += `
                <li class="col s2" id="${pokemon.id}">
                    <img class="responsive-img" src="${pokemon.sprites.front_default}" alt="">
                    ${pokemon.name}
                    <p>${pokemon.id}</p>
                </li> `
        } catch (error) {
            console.log("ERROR: " + error);
        }
    }

    async renderPokemonInfo(data){
        const pokemon = await data
        let types = ``
        let moves = ``
        let abilities = ``
        try {
            for (const type of pokemon.types) {
                types += `
                <li class="col s6">${type.type.name}</li>`
            }
            for (const move of pokemon.moves) {
                moves += `
                <li class="col s4">${move.move.name}</li>`
            }
            for (const ability of pokemon.abilities) {
                abilities += `
                <li class="col s4">${ability.ability.name}</li>`
            }
            console.log(abilities)
            this.pokemonInfo.innerHTML = `
                            <div class="section row">
                            <div class="col s3">
                                <img class="responsive-img circle" src="${pokemon.sprites.front_default}" alt="" height="100" width="100">
                            </div>
                            <div class="col s9">
                                <h4 class="col s12"> ${pokemon.name} </h4>
                                <ul class="row">
                                    ${types}
                                </ul>
                            </div>
                            </div>
                            <div class="divider"></div>
                            <div class="section">
                                <h5 class="col s12"> Habilidades </h5>
                                <ul class="row">
                                    ${abilities}
                                </ul>
                            </div>
                            <div class="divider"></div>
                            <div class="section">
                                <h5 class="col s12"> Movimientos </h5>
                                <ul class="row">
                                    ${moves}
                                </ul>
                            </div>
                                
            `
        } catch (error) {
            console.log("renderPokemonInfo ERROR: " + error)
        }
    }
}