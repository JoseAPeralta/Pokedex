const trainerApp = new TrainerController(new TrainerModel(), new TrainerView())
const pokemonApp = new PokemonController(new PokemonModel(), new PokemonView())
trainerApp.getTrainer()
pokemonApp.getPokemons()