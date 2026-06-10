const pokemonName =
    document.querySelector(".pokemon-name");

const pokemonNumber =
    document.querySelector(".pokemon-number");

const pokemonImage =
    document.querySelector(".pokemon-image");

const pokemonHeight =
    document.querySelector(".pokemon-height");

const pokemonWeight =
    document.querySelector(".pokemon-weight");

const pokemonTypes =
    document.querySelector(".types");

const form =
    document.querySelector(".form");

const input =
    document.querySelector(".input-search");

let currentPokemon = 1;

/* =========================
   CORES DOS TIPOS
========================= */

const typeColors = {

    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"

};

/* =========================
   TRADUÇÃO
========================= */

const tiposPT = {

    normal: "Normal",
    fire: "Fogo",
    water: "Água",
    electric: "Elétrico",
    grass: "Planta",
    ice: "Gelo",
    fighting: "Lutador",
    poison: "Veneno",
    ground: "Terra",
    flying: "Voador",
    psychic: "Psíquico",
    bug: "Inseto",
    rock: "Pedra",
    ghost: "Fantasma",
    dragon: "Dragão",
    dark: "Sombrio",
    steel: "Metal",
    fairy: "Fada"

};

/* =========================
   BUSCAR POKÉMON
========================= */

async function fetchPokemon(pokemon) {

    const response =
        await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );

    if (response.status === 200) {

        return await response.json();

    }

    return null;
}

/* =========================
   RENDERIZAR
========================= */

async function renderPokemon(pokemon) {

    pokemonName.innerHTML =
        "Carregando...";

    pokemonNumber.innerHTML =
        "";

    const data =
        await fetchPokemon(pokemon);

    if (!data) {

        pokemonName.innerHTML =
            "Pokémon não encontrado";

        pokemonNumber.innerHTML =
            "";

        pokemonImage.src =
            "";

        pokemonHeight.innerHTML =
            "-";

        pokemonWeight.innerHTML =
            "-";

        pokemonTypes.innerHTML =
            "";

        return;
    }

    currentPokemon =
        data.id;

    pokemonName.innerHTML =
        data.name;

    pokemonNumber.innerHTML =
        "#" + data.id;

    pokemonImage.src =
        data.sprites.other[
            "official-artwork"
        ].front_default;

    pokemonHeight.innerHTML =
        (data.height / 10) + " m";

    pokemonWeight.innerHTML =
        (data.weight / 10) + " kg";

    pokemonTypes.innerHTML =
        "";

    data.types.forEach(tipo => {

        const nomeTipo =
            tipo.type.name;

        pokemonTypes.innerHTML += `

            <span
                class="type"
                style="
                    background:
                    ${typeColors[nomeTipo]}
                "
            >

                ${tiposPT[nomeTipo]}

            </span>

        `;

    });

    input.value = "";
}

/* =========================
   FORM
========================= */

form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        renderPokemon(
            input.value.toLowerCase()
        );

    }
);

/* =========================
   BOTÃO ANTERIOR
========================= */

document
    .querySelector(".btn-prev")
    .addEventListener(
        "click",
        () => {

            if (currentPokemon > 1) {

                currentPokemon--;

                renderPokemon(
                    currentPokemon
                );

            }

        }
    );

/* =========================
   BOTÃO PRÓXIMO
========================= */

document
    .querySelector(".btn-next")
    .addEventListener(
        "click",
        () => {

            currentPokemon++;

            renderPokemon(
                currentPokemon
            );

        }
    );

/* =========================
   PRIMEIRO POKÉMON
========================= */

renderPokemon(1);