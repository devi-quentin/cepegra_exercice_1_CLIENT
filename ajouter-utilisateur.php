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
            <form action="" method="POST" id="addUserForm">
                <div>
                    <label for="">Fonction</label>
                    <select name="id_function" id="id_function">
                        <option value="2">Stagiaire</option>
                        <option value="1">Secrétaire</option>
                    </select>
                </div>

                <div class="form_group">
                    <div>
                        <label for="name">Nom</label>
                        <input type="text" name="name" id="name" value="" required>
                    </div>

                    <div>
                        <label for="firstname">Prénom</label>
                        <input type="text" name="firstname" id="firstname" value="" required>
                    </div>
                </div>

                <div class="form_group">
                    <div>
                        <label for="password">Mot de passe</label>
                        <input type="password" name="password" id="password" value="" required>
                    </div>

                    <div>
                        <label for="password_verif">Vérifier Mot de passe</label>
                        <input type="password" name="password_verif" id="password_verif" value="" required>
                    </div>
                </div>

                <div>
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" value="" required>
                </div>

                <div>
                    <button>Inscription</button>
                </div>
            </form>

            <section class="msgForUser" id="msgForUser"></section>
        </section>
    </main>
    <?php include 'includes/footer.php'; ?>
    <script src="script/verif-connected.js"></script>
    <script src="script/ajouter-utilisateur.js"></script>
</body>

</html>