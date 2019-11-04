<?php 

if (isset($_GET['category_id'])) {
    $layout = 'category';
} elseif (isset($_GET['product_id'])) {
    $layout = 'product';
} else {
    $layout = 'homepage';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>My eshop</title>

    <link rel="stylesheet" href="css/main.css" />

</head>
<body>

    <div id="page">

        <?php include 'header.php' ?>

        <?php include 'topmenu.php' ?>

        <div id="content">

        <?php include $layout . '/layout.php' ?>

        </div>

        <?php include 'footer.php' ?>

    </div>

</body>
</html>