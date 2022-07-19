<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.min.css">
    <title>Inscrire stagiaire</title>
</head>
<body>
    <?php include 'includes/header.php'; ?>
    <main>
        <?php include 'includes/nav.php'; ?>
        <section id="page">      
            <h1>Inscrire des stagiaires à une formation</h1>
            <form action="" method="POST" id="addFormationForm">                
                <div>
                    <label for="formation">Formation</label>
                    <select name="formation" id="formation" required>
                        <option value="">--</option>
                    </select>
                </div>

                <div>
                    <label for="searchStagiaires">Ajouter un stagiaire</label>
                    <input type="search" name="searchStagiaires" id="searchStagiaires" placeholder="nom, prénom, email">
                    <div id="searchResults" class="searchResults"></div>
                </div>

                <div id="listInscriptions">
                    
                </div>

                <div>
                    <button>Mettre à jour la liste des stagiaires</button>
                </div>
            </form>
            <section id="msgForUser"></section>
        </section>
    </main>
    <?php include 'includes/footer.php'; ?>
    <script src="script/verif-connected.js"></script>
    <script src="script/inscrire-stagiaire-formation.js"></script>
</body>
</html>