import { Router, Request, Response } from "express";
import { AuthorManager } from "../models/author";
import * as bodyParser from "body-parser";
import * as assertInput from "../assert-input";

const route = Router();

route.get("/",
    async (req: Request, res: Response) => {
        console.log("Route GET /author/");
        const data = await new AuthorManager().getAllAuthors();
        res.send(data);
    });

route.get("/:authorId",
    async (req: Request, res: Response) => {
        console.log("Route GET /author/:authorId");
        const data = await new AuthorManager().getAuthor(req.params.authorId);
        res.send(data);
    });

route.delete("/:authorId",
    async (req: Request, res: Response) => {
        console.log("Route DELETE /author/:authorId");
        const data = await new AuthorManager().deleteAuthor(req.params.authorId);
        res.send(data);
    });

route.post("/",
    bodyParser.json(),
    assertInput.bodyHas("name", "dateOfBirth"),
    async (req: Request, res: Response) => {
        console.log("Route POST /author/");
        const data = await new AuthorManager().addAuthor(req.body);
        res.send(data);
    });

route.put("/:authorId",
    bodyParser.json(),
    assertInput.bodyHas("name", "dateOfBirth"),
    async (req: Request, res: Response) => {
        console.log("Route PUT /author/:authorId");
        const data = await new AuthorManager().updateAuthor(req.params.authorId, req.body);
        res.send(data);
    });

export { route };