<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="container">

        <div class="left-side">

            <div class="logo">
                <h1>Pokédex</h1>
                <span>Explore Pokémon</span>
            </div>

            <form class="form">
                <input
                    type="search"
                    class="input-search"
                    placeholder="Digite o nome ou número...">

                <button type="submit">
                    Buscar
                </button>
            </form>

            <div class="buttons">

                <button class="btn-prev">
                    ◀ Anterior
                </button>

                <button class="btn-next">
                    Próximo ▶
                </button>

            </div>

        </div>

        <div class="pokemon-card">

            <img
                class="pokemon-image"
                src=""
                alt="pokemon">

            <h2>
                #<span class="pokemon-number"></span>
            </h2>

            <h1 class="pokemon-name"></h1>

            <div class="info">

                <div class="info-box">
                    <span>Altura</span>
                    <p class="pokemon-height"></p>
                </div>

                <div class="info-box">
                    <span>Peso</span>
                    <p class="pokemon-weight"></p>
                </div>

            </div>

            <div class="types"></div>

        </div>

    </div>

    <script src="js/script.js"></script>

</body>

</html>