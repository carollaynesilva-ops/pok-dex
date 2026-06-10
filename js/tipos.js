async function carregarTipo() {

    const response =
        await fetch(
            `https://pokeapi.co/api/v2/type/${tipo}`
        );

    const data =
        await response.json();

    const lista =
        document.getElementById(
            'listaPokemon'
        );

    for (let i = 0; i < 20; i++) {

        const pokemon =
            data.pokemon[i];

        const pokemonData =
            await fetch(
                pokemon.pokemon.url
            );

        const detalhes =
            await pokemonData.json();

        lista.innerHTML += `

<div class="card-pokemon">

<img
src="${detalhes.sprites.other[
                'official-artwork'
            ].front_default
            }">

<h3>
${detalhes.name}
</h3>

</div>

`;

    }

}

carregarTipo();