class TrainerController{
    constructor(model, view){
        this.model = model
        this.view = view
    }

    getTrainer(){
        this.view.renderTrainer(this.model.getTrainer())
    }
}