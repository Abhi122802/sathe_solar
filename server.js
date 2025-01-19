const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: "",
    user: "root",
    password: "Abhi@5468",
    database: "ContactFormDB",
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database.");
});

// Route to handle form submission
app.post("/submit-form", (req, res) => {
    const { firstName, contactNumber, email, message } = req.body;
    const query = "INSERT INTO inquiries (first_name, contact_number, email, message) VALUES (?, ?, ?, ?)";
    db.query(query, [firstName, contactNumber, email, message], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error saving data to database.");
        } else {
            res.status(200).send("Data saved successfully.");
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
