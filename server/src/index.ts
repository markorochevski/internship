import express from "express";
import * as bodyParser from "body-parser";
import { bookRouter } from "./routes/book";
import { authorRouter } from "./routes/author";
import { publisherRouter } from "./routes/publisher";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/book", bookRouter);
app.use("/author", authorRouter);
app.use("/publisher", publisherRouter);

app.listen(5000, () => {
    console.log("Server running on port 5000!");
});