import { Router, Request, Response } from "express";

const publisherRouter = Router();

publisherRouter.get("/", (req: Request, res: Response) => {
    console.log("Route GET /publisher/");
    res.send({ publisher: "Penguin Random House" });
});

export { publisherRouter };