<?php 

// Vous devez remplacer root par votre utilisateur phpmyadmin

$username = 'root';
$password = '';
$dbname = 'admin_festival_neoules';
$host = 'localhost:3306';

// Connexion a la base de donnée

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
} catch(PDOException $e) {
    print $e->getMessage();
}

?>