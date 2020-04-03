class PokemonController{
    constructor(model, view){
        this.model = model
        this.view = view
    }

    getPokemon(id){
        this.view.renderPokemonInfo(this.model.getPokemon(id))
    }

    getPokemons(){
        this.view.resetPokemontListContainer()
        try {
            for (let i = 1 + this.model.getPaginationValue() ; i <= this.model.getPaginationNextValue(); i++) {
                this.view.renderPokemons(this.model.getPokemon(i))
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    }

    pagination(next){
        this.model.setPagination(next)
        this.getPokemons()
    }
}