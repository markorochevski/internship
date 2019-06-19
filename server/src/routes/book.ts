import { Router, Request, Response } from "express";

const bookRouter = Router();

bookRouter.get("/", (req: Request, res: Response) => {
    console.log("Route GET /book/");
    res.send({ book: "Lord of the rings" });
});

export { bookRouter };