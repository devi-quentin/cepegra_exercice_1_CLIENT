<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style/style.min.css">
  <title>Evalutation GE - Ex1</title>
</head>

<body>
  <?php include 'includes/header.php'; ?>
  <main>
    <?php include 'includes/nav.php'; ?>
    <section id="page">
      <h1>S'auto évaluer (GE)</h1>
      <form action="" method="POST" id="formGE">
        <div class="form_group">
          <div>
            <label for="formation_id">Formation cible</label>
            <select name="formation_id" id="formation_id" required>
              <option value="">--</option>
            </select>
          </div>
        </div>
        <div id="GE">
          
        </div>
      </form>
      <p class="test"></p>

      <section id="msgForUser"></section>
    </section>
  </main>
  <?php include 'includes/footer.php'; ?>
  <script src="script/verif-connected.js"></script>
  <script src="script/evaluation.js"></script>
</body>

</html>