import { Router, Request, Response } from "express";
import { BookManager } from "../models/book";
import * as bodyParser from "body-parser";
import * as assertInput from "../assert-input";

const route = Router();

route.get("/",
    async (req: Request, res: Response) => {
        console.log("Route GET /book/");
        const data = await new BookManager().getAllBooks();
        res.send(data);
    });

route.get("/:bookId",
    async (req: Request, res: Response) => {
        console.log("Route GET /book/:bookId");
        const data = await new BookManager().getBook(req.params.bookId);
        res.send(data);
    });

route.delete("/:bookId",
    async (req: Request, res: Response) => {
        console.log("Route DELETE /book/:bookId");
        const data = await new BookManager().deleteBook(req.params.bookId);
        res.send(data);
    });

route.post("/",
    bodyParser.json(),
    assertInput.bodyHas("name", "genre", "isbn", "authorId", "publisherId"),
    async (req: Request, res: Response) => {
        console.log("Route POST /book/");
        const data = await new BookManager().addBook(req.body);
        res.send(data);
    });

route.put("/:bookId",
    bodyParser.json(),
    assertInput.bodyHas("name", "genre", "isbn", "authorId", "publisherId"),
    async (req: Request, res: Response) => {
        console.log("Route PUT /book/:bookId");
        const data = await new BookManager().updateBook(req.params.bookId, req.body);
        res.send(data);
    });

export { route };