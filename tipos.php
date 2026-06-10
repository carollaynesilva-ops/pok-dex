<?php

$tipo = $_GET['tipo'] ?? 'fire';

$tiposPT = [

    'fire' => '🔥 Fogo',
    'water' => '💧 Água',
    'grass' => '🌿 Planta',
    'electric' => '⚡ Elétrico',
    'ice' => '❄️ Gelo',
    'psychic' => '🔮 Psíquico',
    'ghost' => '👻 Fantasma',
    'dragon' => '🐉 Dragão'

];

$nomeTipo =
    $tiposPT[$tipo] ?? ucfirst($tipo);

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">

    <title>
        Pokémon do Tipo
    </title>

    <link
        rel="stylesheet"
        href="css/style.css">

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

            <h1 class="titulo-tipo">

                <?php echo $nomeTipo; ?>

            </h1>

            <p class="subtitulo">

                Explore os Pokémon
                deste tipo.

            </p>

            <div id="listaPokemon">

            </div>

        </main>

    </div>

    <script>
        const tipo =
            "<?php echo $tipo; ?>";
    </script>

    <script src="js/tipos.js"></script>

</body>

</html>