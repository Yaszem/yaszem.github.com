<?php
// Vérifiez si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérez les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Vérifiez les champs obligatoires
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        // Configuration de l'e-mail
        $to = "yaszemmouri@gmail.com"; // Remplacez par votre adresse email
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Corps du message
        $emailBody = "Nom: $name\nEmail: $email\nSujet: $subject\n\nMessage:\n$message";

        // Envoyez l'e-mail
        if (mail($to, $subject, $emailBody, $headers)) {
            echo "Votre message a été envoyé avec succès.";
        } else {
            echo "Une erreur est survenue lors de l'envoi de votre message.";
        }
    } else {
        echo "Veuillez remplir tous les champs.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>
