// const trainerApp = new TrainerController(new TrainerModel(), new TrainerView())
const pokemonApp = new PokemonController(new PokemonModel(), new PokemonView());
const teamApp = new TeamController(new TeamModel(), new TeamView());
// trainerApp.getTrainer()
pokemonApp.getPokemons();
