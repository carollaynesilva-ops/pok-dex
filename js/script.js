async function buscarPokemon() {

    const nome = document
        .getElementById("pokemon")
        .value
        .toLowerCase();

    const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nome}`
    );

    const dados = await resposta.json();

    document.getElementById("resultado").innerHTML = `
        <h2>${dados.name}</h2>

        <img src="${dados.sprites.front_default}">

        <p>Altura: ${dados.height}</p>

        <p>Peso: ${dados.weight}</p>

        <p>Tipo: ${dados.types[0].type.name}</p>
    `;
}