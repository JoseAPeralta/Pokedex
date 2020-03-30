class TrainerView{
    constructor(){
        this.trainerContainer = document.querySelector('#trainerContainer')
    }

    async renderTrainer(data){
        let values = await data
        let img = values.results['0'].picture.medium
        let name = values.results['0'].name.first + values.results['0'].name.last
        let city = values.results['0'].location.city
        let state = values.results['0'].location.state
        try {
            this.trainerContainer.innerHTML = `
                <div class="col s3">
                    <img class="responsive-img circle" src="${img}" alt="" height="100" width="100">
                </div>                            
                <p class="col s6">${name}</p>
                <p class="col s6">${city}, ${state}</p>
            `
        } catch (error) {
            console.log(error + "error")
        }
    }
}
