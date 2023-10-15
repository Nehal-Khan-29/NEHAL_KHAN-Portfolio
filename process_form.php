<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "nehalmicro29@gmail.com";
    $email_subject = "Contact Form Submission - $subject"; // Changed this variable to avoid conflict
    $email_message = "Name: $name\nEmail: $email\n\n$message"; // Changed this variable to avoid conflict

    // You should set additional headers for your email, like 'From', 'Reply-To', and 'Content-Type'.
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    mail($to, $email_subject, $email_message, $headers);

    // Redirect to a thank you page
    exit; // Exit to prevent further execution
}
?>
