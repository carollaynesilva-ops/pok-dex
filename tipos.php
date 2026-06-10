<?php

$tipo = $_GET['tipo'] ?? 'fire';

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Pokémon por Tipo</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="app">

        <aside class="sidebar">

            <h2>Pokédex</h2>

            <a href="index.php">← Voltar</a>

        </aside>

        <main class="content">

            <h1 class="titulo-tipo">

                Tipo:
                <?php echo ucfirst($tipo); ?>

            </h1>

            <div id="listaPokemon">

            </div>

        </main>

    </div>

    <script>
        const tipo = "<?php echo $tipo; ?>";
    </script>

    <script src="js/tipos.js"></script>

</body>

</html>