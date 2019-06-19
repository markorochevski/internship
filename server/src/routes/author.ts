import { Router, Request, Response } from "express";

const authorRouter = Router();

authorRouter.get("/", (req: Request, res: Response) => {
    console.log("Route GET /author/");
    res.send({ author: "J. R. R. Tolkien" });
});

export { authorRouter };