const pokemonName = document.querySelector(".pokemon-name");
const pokemonNumber = document.querySelector(".pokemon-number");
const pokemonImage = document.querySelector(".pokemon-image");
const pokemonHeight = document.querySelector(".pokemon-height");
const pokemonWeight = document.querySelector(".pokemon-weight");

const form = document.querySelector(".form");
const input = document.querySelector(".input-search");

let currentPokemon = 1;

const colors = {
    grass: "#78C850",
    poison: "#A040A0",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    bug: "#A8B820",
    normal: "#A8A878",
    flying: "#A890F0",
    ground: "#E0C068",
    fairy: "#EE99AC",
    fighting: "#C03028",
    psychic: "#F85888",
    rock: "#B8A038",
    ghost: "#705898",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0"
};

async function fetchPokemon(pokemon) {

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    if (response.status === 200) {
        return await response.json();
    }
}

async function renderPokemon(pokemon) {

    const data = await fetchPokemon(pokemon);

    if (!data) return;

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;

    pokemonImage.src =
        data.sprites.other["official-artwork"].front_default;

    pokemonHeight.innerHTML =
        `${data.height / 10} m`;

    pokemonWeight.innerHTML =
        `${data.weight / 10} kg`;

    currentPokemon = data.id;

    const typesDiv =
        document.querySelector(".types");

    typesDiv.innerHTML = "";

    data.types.forEach(type => {

        typesDiv.innerHTML += `
            <span
            class="type"
            style="background:${colors[type.type.name]}">
            ${type.type.name}
            </span>
        `;

    });

}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    renderPokemon(
        input.value.toLowerCase()
    );

});

document
    .querySelector(".btn-prev")
    .addEventListener("click", () => {

        if (currentPokemon > 1) {

            currentPokemon--;

            renderPokemon(currentPokemon);

        }

    });

document
    .querySelector(".btn-next")
    .addEventListener("click", () => {

        currentPokemon++;

        renderPokemon(currentPokemon);

    });

renderPokemon(1);