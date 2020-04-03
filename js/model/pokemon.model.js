class PokemonModel{
    constructor(){
        this.url = `https://pokeapi.co/api/v2/pokemon/`
        this.paginationAmount = 10
        this.paginationValue = 0
    }

    getPaginationValue(){
        return this.paginationValue
    }

    getPaginationNextValue(){
        return (this.paginationValue + this.paginationAmount)
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
        return pokemon
    }
    
}