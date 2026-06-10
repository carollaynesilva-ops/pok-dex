const listaPokemon =
    document.getElementById(
        "listaPokemon"
    );

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

const coresTipo = {

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

async function carregarTipo() {

    listaPokemon.innerHTML = `
        <h2>
            Carregando Pokémon...
        </h2>
    `;

    try {

        const response =
            await fetch(
                `https://pokeapi.co/api/v2/type/${tipo}`
            );

        const data =
            await response.json();

        listaPokemon.innerHTML = "";

        const pokemons =
            data.pokemon.slice(0, 30);

        for (const item of pokemons) {

            const pokemonResponse =
                await fetch(
                    item.pokemon.url
                );

            const pokemon =
                await pokemonResponse.json();

            let tiposHTML = "";

            pokemon.types.forEach(tipoAtual => {

                const nomeTipo =
                    tipoAtual.type.name;

                tiposHTML += `

                    <span
                        class="type"
                        style="
                            background:
                            ${coresTipo[nomeTipo]}
                        "
                    >

                        ${tiposPT[nomeTipo]
                    }

                    </span>

                `;

            });

            listaPokemon.innerHTML += `

                <div class="card-pokemon">

                    <img
                        src="
                        ${pokemon.sprites
                    .other[
                    "official-artwork"
                ]
                    .front_default
                }
                        "
                        alt="
                        ${pokemon.name}
                        "
                    >

                    <span>

                        #${pokemon.id}

                    </span>

                    <h3>

                        ${pokemon.name}

                    </h3>

                    <div
                        class="types"
                        style="
                        margin-top:10px;
                        "
                    >

                        ${tiposHTML}

                    </div>

                </div>

            `;

        }

    }
    catch (error) {

        listaPokemon.innerHTML = `

            <h2>

                Erro ao carregar.

            </h2>

        `;

        console.error(error);

    }

}

carregarTipo();