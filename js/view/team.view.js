class TeamView{
    constructor(){
        this.teamContainer = document.querySelector('#teamContainer')
    }

    resetTeamContainer(){
        this.teamContainer.innerHTML = ``
    }
    
    async renderTeam(data){
        this.resetTeamContainer()
        const team = await data
        try {
            for (let i = 0; i < team.length; i++) {
                this.teamContainer.innerHTML += `
                <li class="col s2" >
                    <button class="btn-nostyle waves-effect waves-light" pokemonId=${team[i].id}>
                        <img class="responsive-img" src="${team[i].sprites.front_default}" alt="">
                        ${team[i].name}
                        <p>${team[i].id}<p
                    </button>
                    <button class="waves-effect waves-light btn-small" teamIndex="${i}" remove ="true">Remove</button>
                </li>`
            }            
        } catch (error) {
            console.log("ERROR: " + error);
        }
    }
}