<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokédex Explorer</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="app">

        <aside class="sidebar">

            <div class="logo">

                <div class="pokeball-mini"></div>

                <div>
                    <h1>Pokédex</h1>
                    <p>Explorer</p>
                </div>

            </div>

            <nav>

                <span class="menu-title">
                    NAVEGAÇÃO
                </span>

                <a href="index.php">
                    🏠 Início
                </a>

                <span class="menu-title">
                    TIPOS
                </span>

                <a href="tipos.php?tipo=fire">
                    🔥 Fogo
                </a>

                <a href="tipos.php?tipo=water">
                    💧 Água
                </a>

                <a href="tipos.php?tipo=grass">
                    🌿 Planta
                </a>

                <a href="tipos.php?tipo=electric">
                    ⚡ Elétrico
                </a>

                <a href="tipos.php?tipo=ice">
                    ❄️ Gelo
                </a>

                <a href="tipos.php?tipo=psychic">
                    🔮 Psíquico
                </a>

                <a href="tipos.php?tipo=ghost">
                    👻 Fantasma
                </a>

                <a href="tipos.php?tipo=dragon">
                    🐉 Dragão
                </a>

            </nav>

        </aside>

        <main class="content">

            <header class="top-bar">

                <h2>
                    Banco de Dados Pokémon
                </h2>

                <p>
                    Pesquise qualquer Pokémon pelo nome ou número.
                </p>

            </header>

            <div class="search-box">

                <form class="form">

                    <input
                        type="search"
                        class="input-search"
                        placeholder="Ex: Pikachu ou 25"
                        required>

                    <button type="submit">
                        Pesquisar
                    </button>

                </form>

            </div>

            <div class="pokemon-card">

                <div class="image-container">

                    <img
                        src=""
                        class="pokemon-image"
                        alt="Pokemon">

                </div>

                <span class="pokemon-number">
                    #001
                </span>

                <h1 class="pokemon-name">
                    Bulbasaur
                </h1>

                <div class="types">

                </div>

                <div class="stats">

                    <div class="stat-box">

                        <span>Altura</span>

                        <p class="pokemon-height">
                            -
                        </p>

                    </div>

                    <div class="stat-box">

                        <span>Peso</span>

                        <p class="pokemon-weight">
                            -
                        </p>

                    </div>

                </div>

                <div class="buttons">

                    <button
                        type="button"
                        class="btn-prev">
                        ← Anterior
                    </button>

                    <button
                        type="button"
                        class="btn-next">
                        Próximo →
                    </button>

                </div>

            </div>

        </main>

    </div>

    <script src="js/script.js"></script>

</body>

</html>