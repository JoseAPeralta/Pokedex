class PokemonModel{
    constructor(){
        this.url = `https://pokeapi.co/api/v2/pokemon/`
        this.paginationAmount = 5
        this.paginationValue = this.paginationAmount

    }

    getPagination(){
        return this.paginationValue
    }

    setPagination(next){
        if(next && this.paginationValue <= 964){
            this.paginationValue += this.paginationAmount
        }if (next === false && this.paginationValue >= this.paginationAmount) {
            this.paginationValue -= this.paginationAmount
        }else{
            
        }
    }

    async getPokemon(id){
        const response = await fetch(`${this.url}${id}`)
        const pokemon = await response.json()
        console.log(pokemon)
        return pokemon
    }

    async getPokemons(){
        let pokemonList = []
        try {
            for (let i = (this.paginationValue - (this.paginationAmount - 1)); i < this.paginationValue; i++) {
                let result = await this.getPokemon(i)
                pokemonList.push(result)
            }
        } catch (error) {
            console.log("ERROR: "+ error)
        }
        return pokemonList
    }
    
}