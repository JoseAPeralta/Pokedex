class TeamModel{
    constructor(){
        this.team = []
    }

    getTeam(){
        return this.team
    }

    addToTeam(pokemon){
        if(this.team.length <= 4){
            this.team = this.team.concat(pokemon)
        }else{
            return "Only 5 pokemons per team"
        }
    }

    removeToTeam(pokemonIndex){
        this.team.splice(pokemonIndex, 1)
        console.log(pokemonIndex);
    }
}