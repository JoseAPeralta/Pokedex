class TeamController{
    constructor(model, view){
        this.model = model
        this.view = view
    }

    addToTeam(id){
        this.model.addToTeam(id)
        this.renderTeam()
    }

    removeToTeam(pokemonIndex){
        this.model.removeToTeam(pokemonIndex)
        this.renderTeam()
    }

    renderTeam(){
        this.view.renderTeam(this.model.getTeam())
    }
}