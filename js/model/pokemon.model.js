class PokemonModel {
    constructor() {
        this.url = `https://pokeapi.co/api/v2/pokemon/`
        this.paginationAmount = 5
        this.paginationValue = 0
        this.pokemonJson = []
    }

    getPaginationValue() {
        return this.paginationValue
    }

    getPaginationNextValue() {
        return (this.paginationValue + this.paginationAmount)
    }

    getLocalPokemon(id) {
        for (const pokemon in this.pokemonJson) {
            if (this.pokemonJson[pokemon].id == id) {
                return this.pokemonJson[pokemon]
            }
        }
    }

    setPagination(next) {
        if (next && this.paginationValue <= 964) {
            this.paginationValue += this.paginationAmount
        } if (next === false && this.paginationValue >= this.paginationAmount) {
            this.paginationValue -= this.paginationAmount
        } else {
        }
    }

    async getPokemon(id) {
        const response = await fetch(`${this.url}${id}`)
        const pokemon = await response.json()
        this.pokemonJson = this.pokemonJson.concat(pokemon)
        return pokemon
    }

}