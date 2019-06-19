import express from "express";

const app = express();
import { booksRouter } from "./routes/books";

app.use("/books", booksRouter);

app.listen(5000, () => {
    console.log("Server running on port 5000!");
});