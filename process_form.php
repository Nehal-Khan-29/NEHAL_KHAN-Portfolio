<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "nehalmicro29@gmail.com";
    $subject = "Contact Form Submission - $subject";
    $message = "Name: $name\nEmail: $email\n\n$message";

    mail($to, $subject, $message);
    header("Location: thank_you.html");
}
?>
