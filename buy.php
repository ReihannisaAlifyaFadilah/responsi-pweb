<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purchase Confirmation</title>
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ninja_name = htmlspecialchars($_POST['ninja_name']); // Ensure the value is safe for display

    // Append the purchased ninja name to the file
    $file = fopen("purchased_ninjas.txt", "a");
    fwrite($file, $ninja_name . "\n");
    fclose($file);

    echo "<h1>Ninja $ninja_name berhasil dibeli!</h1>";
    echo '<a href="daftar.html">Kembali ke Daftar Ninja</a>';
} else {
    echo "<h1>Invalid request</h1>";
}
?>
</body>
</html>
