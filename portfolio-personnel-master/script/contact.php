<?php
$nom = $_POST['nom'];
$email = $_POST['email'];
$sujet = $_POST['sujet'];
$message = $_POST['message'];
$success = mail("spitzerl@proton.me", "[CONTACT SITE] $sujet de $nom", $message, "Reply-To: $email");

if($success) {
   header("Location: ../?success=1");
} else {
   echo "Une erreur est survenue lors de l'envoi du message.";
}
?>
