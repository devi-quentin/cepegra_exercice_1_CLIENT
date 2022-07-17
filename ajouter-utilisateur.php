<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.min.css">
    <title>Exercice 1</title>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    <main>
        <?php include 'includes/nav.php'; ?>
        <section id="page">      
            <h1>Ajouter un utilisateur</h1>
            <form action="" method="POST">
                <div class="form_group">
                    <div>
                        <label for="name">Nom</label>
                        <input type="text" name="name" id="name" placeholder="" required>
                    </div>
    
                    <div>
                        <label for="firstname">Prénom</label>
                        <input type="text" name="firstname" id="firstname" placeholder="" required>
                    </div>
                </div>

                <div class="form_group">
                    <div>
                        <label for="password">Mot de passe</label>
                        <input type="password" name="password" id="password" placeholder="" required>
                    </div>
    
                    <div>
                        <label for="password_verif">Vérifier Mot de passe</label>
                        <input type="password" name="password_verif" id="password_verif" placeholder="" required>
                    </div>
                </div>

                <div>
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="" required>
                </div>

                <div>
                    <button>Inscription</button>
                </div>
            </form>
        </section>
    </main>
    <?php include 'includes/footer.php'; ?>
    <script src="script/main.js"></script>
</body>
</html>