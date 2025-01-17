<?php
// Login script
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Fetch the unhashed password from the database
    $query = "SELECT Password FROM info WHERE Email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        $storedPassword = $row['Password']; // The stored password as plain text

        

        // Compare the entered password with the stored plain text password
        if ($password === $storedPassword) {
            echo "Login successful. Welcome!";
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "User not found. Please register.";
    }

    $stmt->close();
}
$conn->close(); // Close the database connection

?>
