<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ninja_name = $_POST['ninja_name'];
    $ninja_price = $_POST['ninja_price'];
    
    $data = "Ninja: $ninja_name, Harga: $ninja_price\n";
    file_put_contents('ninja.txt', $data, FILE_APPEND);

    echo "Pembelian berhasil!<br>";
    echo "<a href='index.html'>Kembali ke halaman utama</a>";
} else {
    echo "Metode permintaan tidak valid.";
}
?>
