import { Router, Request, Response } from "express";

const booksRouter = Router();

booksRouter.get("/marko", (req: Request, res: Response) => {
    console.log("Success!");
    res.send(200);
});

export { booksRouter };