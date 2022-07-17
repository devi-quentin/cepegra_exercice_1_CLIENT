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
            <h1>Ajouter une formation</h1>
            <form action="" method="POST">                
                <div>
                    <label for="metier">Métier</label>
                    <select name="metier" id="metier">
                        <option value=null>--</option>
                        <option value="1">Métier 1</option>
                        <option value="2">Métier 2</option>
                    </select>
                </div>

                <div>
                    <label for="labelFormation">Label formation</label>
                    <input type="text" name="labelFormation" id="labelFormation" placeholder="" required>
                </div>
                                
                <div>
                    <label for="dateDebut">Date du début</label>
                    <input type="date" name="dateDebut" id="dateDebut" placeholder="" required>
                </div>

                <div>
                    <label for="nomFormateur">Nom formateur</label>
                    <input type="text" name="nomFormateur" id="nomFormateur" placeholder="" required>
                </div>

                <div>
                    <label for="lieu">Lieu</label>
                    <select name="lieu" id="lieu">
                        <option value="1">Lieu 1</option>
                        <option value="2">Lieu 2</option>
                    </select>
                </div>

                <div>
                    <button>Planifier la formation</button>
                </div>
            </form>
        </section>
    </main>
    <?php include 'includes/footer.php'; ?>
    <script src="script/main.js"></script>
</body>
</html>