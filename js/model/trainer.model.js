class TrainerModel{
    constructor(){
        this.url = "https://randomuser.me/api/"
    }
    
    async getTrainer(){
        const respuesta = await fetch(this.url)
        const trainerData = await respuesta.json()
        return trainerData
    }
}