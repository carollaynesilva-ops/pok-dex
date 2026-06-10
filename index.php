<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Pokédex</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="pokedex">

        <h1>Pokédex</h1>

        <input
            type="text"
            id="pokemon"
            placeholder="Digite o nome">

        <button onclick="buscarPokemon()">
            Buscar
        </button>

        <div id="resultado"></div>

    </div>

    <script src="js/script.js"></script>

</body>

</html>