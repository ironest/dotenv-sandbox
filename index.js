require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT;

console.log(process.env.PORT);
console.log(process.env.API_KEY);
console.log(process.env.DB_CONNECTION);

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.listen(port, () => { 
    console.log(`Example app listening on port ${port}!`);
})