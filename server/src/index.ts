import express from "express";
import * as bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/book", (req, res) => {
    console.log("Success!");
    res.send({ book: "Lord of the rings" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000!");
});