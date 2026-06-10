<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="app">

        <aside class="sidebar">

            <h2>Pokédex</h2>

            <a href="index.php">Início</a>

            <a href="tipos.php?tipo=fire">🔥 Fogo</a>
            <a href="tipos.php?tipo=water">💧 Água</a>
            <a href="tipos.php?tipo=grass">🌿 Planta</a>
            <a href="tipos.php?tipo=electric">⚡ Elétrico</a>
            <a href="tipos.php?tipo=psychic">🔮 Psíquico</a>
            <a href="tipos.php?tipo=ghost">👻 Fantasma</a>
            <a href="tipos.php?tipo=dragon">🐉 Dragão</a>

        </aside>

        <main class="content">

            <div class="pokemon-card">

                <img class="pokemon-image">

                <span class="pokemon-number"></span>

                <h1 class="pokemon-name"></h1>

                <div class="types"></div>

                <div class="info">

                    <div>
                        <span>Altura</span>
                        <p class="pokemon-height"></p>
                    </div>

                    <div>
                        <span>Peso</span>
                        <p class="pokemon-weight"></p>
                    </div>

                </div>

            </div>

            <form class="form">

                <input
                    class="input-search"
                    placeholder="Nome ou número">

                <button>
                    Buscar
                </button>

            </form>

            <div class="buttons">

                <button class="btn-prev">
                    Anterior
                </button>

                <button class="btn-next">
                    Próximo
                </button>

            </div>

        </main>

    </div>

    <script src="js/script.js"></script>

</body>

</html>