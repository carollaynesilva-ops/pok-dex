<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="pokedex">

        <img
            src=""
            alt="pokemon"
            class="pokemon-image">

        <h1 class="pokemon-data">
            <span class="pokemon-number"></span>
            -
            <span class="pokemon-name"></span>
        </h1>

        <form class="form">
            <input
                type="search"
                class="input-search"
                placeholder="Nome ou número"
                required>
        </form>

        <div class="buttons">
            <button class="button btn-prev">
                Anterior
            </button>

            <button class="button btn-next">
                Próximo
            </button>
        </div>

    </div>

    <script src="js/script.js"></script>

</body>

</html>