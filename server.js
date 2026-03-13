
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());   // Allow frontend to access backend
app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({ message: "Login successful" });
    } else {
        res.json({ message: "Invalid login" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});