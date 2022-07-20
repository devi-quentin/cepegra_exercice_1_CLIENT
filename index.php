<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.min.css">
    <title>Connexion</title>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    <main>
        <?php echo '<nav></nav>' ?>
        <section id="page">      
            <h1>Connexion</h1>
            <form action="" method="POST" id="connexionForm">
                <div class="form_group">
                    <div>
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="connexionEmail" placeholder="" value="secretaire@gmail.com" required autocomplete="on">
                    </div>

                    <div>
                        <label for="password">Mot de passe</label>
                        <input type="password" name="password" id="connexionPassword" placeholder="" value="pass1" required>
                    </div>
                </div>

                <div>
                    <button>Se connecter</button>
                </div>
            </form>
        </section>
    </main>
    <?php include 'includes/footer.php'; ?>
    <script src="script/connexion.js"></script>
</body>
</html>