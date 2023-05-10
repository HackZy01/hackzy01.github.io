<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = $_POST['response'];
    $timestamp = date('Y-m-d H:i:s');
    $id = uniqid();

    $data = "$id\t$timestamp\t$response\n";
    file_put_contents('responses.txt', $data, FILE_APPEND);

    echo 'Thank you for your response!';
}
?>
