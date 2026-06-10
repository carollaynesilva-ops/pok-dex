const pokemonName =
    document.querySelector('.pokemon-name');

const pokemonNumber =
    document.querySelector('.pokemon-number');

const pokemonImage =
    document.querySelector('.pokemon-image');

const pokemonHeight =
    document.querySelector('.pokemon-height');

const pokemonWeight =
    document.querySelector('.pokemon-weight');

let currentPokemon = 1;

async function fetchPokemon(id) {

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    if (response.status === 200) {

        return await response.json();

    }

}

async function renderPokemon(id) {

    const data =
        await fetchPokemon(id);

    if (!data) return;

    pokemonName.innerHTML =
        data.name;

    pokemonNumber.innerHTML =
        "#" + data.id;

    pokemonImage.src =
        data.sprites.other['official-artwork']
            .front_default;

    pokemonHeight.innerHTML =
        (data.height / 10) + " m";

    pokemonWeight.innerHTML =
        (data.weight / 10) + " kg";

    const types =
        document.querySelector('.types');

    types.innerHTML = "";

    data.types.forEach(tipo => {

        types.innerHTML +=
            `<span class="type">
${tipo.type.name}
</span>`;

    });

    currentPokemon =
        data.id;

}

document
    .querySelector('.form')
    .addEventListener('submit', e => {

        e.preventDefault();

        const valor =
            document.querySelector('.input-search')
                .value.toLowerCase();

        renderPokemon(valor);

    });

document
    .querySelector('.btn-prev')
    .addEventListener('click', () => {

        if (currentPokemon > 1) {

            currentPokemon--;

            renderPokemon(currentPokemon);

        }

    });

document
    .querySelector('.btn-next')
    .addEventListener('click', () => {

        currentPokemon++;

        renderPokemon(currentPokemon);

    });

renderPokemon(1);