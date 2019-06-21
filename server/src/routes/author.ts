import { Router, Request, Response } from "express";
import { AuthorManager } from "../models/author";
import * as bodyParser from "body-parser";

const authorRouter = Router();

authorRouter.get("/",
    async (req: Request, res: Response) => {
        console.log("Route GET /author/");
        const data = await new AuthorManager().getAllAuthors();
        res.send(data);
    });

authorRouter.get("/:authorId",
    async (req: Request, res: Response) => {
        console.log("Route GET /author/:authorId");
        const data = await new AuthorManager().getAuthor(req.params.authorId);
        res.send(data);
    });

authorRouter.delete("/:authorId",
    async (req: Request, res: Response) => {
        console.log("Route DELETE /author/:authorId");
        const data = await new AuthorManager().deleteAuthor(req.params.authorId);
        res.send(data);
    });

authorRouter.post("/",
    bodyParser.json(),
    async (req: Request, res: Response) => {
        console.log("Route POST /author/");
        const data = await new AuthorManager().addAuthor(req.body);
        res.send(data);
    });

authorRouter.put("/:authorId",
    bodyParser.json(),
    async (req: Request, res: Response) => {
        console.log("Route PUT /author/:authorId");
        const data = await new AuthorManager().updateAuthor(req.params.authorId, req.body);
        res.send(data);
    });

export { authorRouter };