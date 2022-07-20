<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style/style.min.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <title>Mes GE</title>
</head>

<body>
  <?php include 'includes/header.php'; ?>
  <main>
    <?php include 'includes/nav.php'; ?>
    <section id="page">
      <h1>Mes GE</h1>
      
      <div class="radar_container">
        <h3>Nom du métier</h3>
        <canvas id="myChart"></canvas>
      </div>
      <section id="msgForUser"></section>
    </section>
  </main>
  <?php include 'includes/footer.php'; ?>
  <script src="script/verif-connected.js"></script>
  <script src="script/mes-ge.js"></script>
</body>

</html>