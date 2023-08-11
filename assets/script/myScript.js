class Pokemon {
  reset() {
    window.location.reload();
  }

  showPokemonApi() {
    const pokemonResult = document.getElementById("pokemon-result");
    pokemonResult.innerHTML = "";
    pokemonResult.innerHTML = "Aku Pokemon Api";
    pokemonResult.style.color = "red";
    console.log("red");
  }

  showPokemonAir() {
    const pokemonResult = document.getElementById("pokemon-result");
    pokemonResult.innerHTML = "";
    pokemonResult.innerHTML = "Aku Pokemon Air";
    pokemonResult.style.color = "Blue";
    console.log("Blue");
  }

  showPokemonAngin() {
    const pokemonResult = document.getElementById("pokemon-result");
    pokemonResult.innerHTML = "";
    pokemonResult.innerHTML = "Aku Pokemon Angin";
    pokemonResult.style.color = "Cyan";
    console.log("Cyan");
  }

  showPokemonJahat() {
    const pokemonResult = document.getElementById("pokemon-result");
    pokemonResult.innerHTML = "";
    pokemonResult.innerHTML = "Aku Pokemon Jahat";
    pokemonResult.style.color = "Black";
    console.log("Black");
  }
}

const pokemon = new Pokemon();

const pokemonApi = document.getElementById("pokemon-api");
pokemonApi.addEventListener("click", pokemon.showPokemonApi);

const pokemonAir = document.getElementById("pokemon-air");
pokemonAir.addEventListener("click", pokemon.showPokemonAir);

const pokemonAngin = document.getElementById("pokemon-angin");
pokemonAngin.addEventListener("click", pokemon.showPokemonAngin);

const pokemonJahat = document.getElementById("pokemon-jahat");
pokemonJahat.addEventListener("click", pokemon.showPokemonJahat);

const pokemonReset = document.getElementById("pokemon-reset");
pokemonReset.addEventListener("click", pokemon.reset);
