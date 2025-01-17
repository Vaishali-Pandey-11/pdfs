<?php
// Register script
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Insert the email and unhashed password into the database
    $query = "INSERT INTO info (Email, Password) VALUES (?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $email, $password); // Store the password as plain text

    if ($stmt->execute()) {
        echo "Registration successful.";
    } else {
        echo "Error: " . $stmt->error;
    }



    $stmt->close();
}
$conn->close();

header("index.html");
exit();  

?>
