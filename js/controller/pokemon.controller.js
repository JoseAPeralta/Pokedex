class PokemonController{
    constructor(model, view){
        this.model = model
        this.view = view
    }

    getPokemon(id){
        this.view.renderPokemonInfo(this.model.getPokemon(id))
    }

    getPokemons(){
        this.view.renderPokemons(this.model.getPokemons())
    }

    pagination(next){
        this.model.setPagination(next)
        this.getPokemons()
    }
}