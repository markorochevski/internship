import { Router, Request, Response } from "express";
import { Publisher } from "../models/publisher";
import * as bodyParser from "body-parser";

const publisherRouter = Router();

publisherRouter.get("/",
    async (req: Request, res: Response) => {
        console.log("Route GET /publisher/");
        const data = await new Publisher().getAllPublishers();
        res.send(data);
    });

publisherRouter.get("/:publisherId",
    async (req: Request, res: Response) => {
        console.log("Route GET /publisher/:publisherId");
        const data = await new Publisher().getPublisher(req.params.publisherId);
        res.send(data);
    });

publisherRouter.delete("/:publisherId",
    async (req: Request, res: Response) => {
        console.log("Route DELETE /publisher/:authorId");
        const data = await new Publisher().deletePublisher(req.params.publisherId);
        res.send(data);
    });

publisherRouter.post("/",
    bodyParser.json(),
    async (req: Request, res: Response) => {
        console.log("Route POST /publisher/");
        const data = await new Publisher().addPublisher(req.body);
        res.send(data);
    });

publisherRouter.put("/:publisherId",
    bodyParser.json(),
    async (req: Request, res: Response) => {
        console.log("Route PUT /publisher/:publisherId");
        const data = await new Publisher().updatePublisher(req.params.publisherId, req.body);
        res.send(data);
    });

export { publisherRouter };