<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize it
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    // Recipient email
    $to = "madurangasahan576@gmail.com";  
    $subject = "New Message from Contact Form";

    // Email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n";

    // Send email
    if(mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again.'); window.location='index.html';</script>";
    }
} else {
    // If accessed directly, redirect to form
    header("Location: index.html");
    exit();
}
?>
