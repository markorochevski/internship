import { Router, Request, Response } from "express";
import { BookManager } from "../models/book";
import * as bodyParser from "body-parser";

const bookRouter = Router();

bookRouter.get("/",
    async (req: Request, res: Response) => {
        console.log("Route GET /book/");
        const data = await new BookManager().getAllBooks();
        res.send(data);
    });

bookRouter.get("/:bookId",
    async (req: Request, res: Response) => {
        console.log("Route GET /book/:bookId");
        const data = await new BookManager().getBook(req.params.bookId);
        res.send(data);
    });

bookRouter.delete("/:bookId",
    async (req: Request, res: Response) => {
        console.log("Route DELETE /book/:bookId");
        const data = await new BookManager().deleteBook(req.params.bookId);
        res.send(data);
    });

bookRouter.post("/",
    bodyParser.json(),
    async (req: Request, res: Response) => {
        console.log("Route POST /book/");
        const data = await new BookManager().addBook(req.body);
        res.send(data);
    });

bookRouter.put("/:bookId",
    bodyParser.json(),
    async (req: Request, res: Response) => {
        console.log("Route PUT /book/:bookId");
        const data = await new BookManager().updateBook(req.params.bookId, req.body);
        res.send(data);
    });

export { bookRouter };