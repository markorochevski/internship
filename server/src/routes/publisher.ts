import { Router, Request, Response } from "express";
import { PublisherManager } from "../models/publisher";
import * as bodyParser from "body-parser";
import * as assertInput from "../assert-input";

const route = Router();

route.get("/",
    async (req: Request, res: Response) => {
        console.log("Route GET /publisher/");
        const data = await new PublisherManager().getAllPublishers();
        res.send(data);
    });

route.get("/:publisherId",
    async (req: Request, res: Response) => {
        console.log("Route GET /publisher/:publisherId");
        const data = await new PublisherManager().getPublisher(req.params.publisherId);
        res.send(data);
    });

route.delete("/:publisherId",
    async (req: Request, res: Response) => {
        console.log("Route DELETE /publisher/:authorId");
        const data = await new PublisherManager().deletePublisher(req.params.publisherId);
        res.send(data);
    });

route.post("/",
    bodyParser.json(),
    assertInput.bodyHas("name", "street", "email"),
    async (req: Request, res: Response) => {
        console.log("Route POST /publisher/");
        const data = await new PublisherManager().addPublisher(req.body);
        res.send(data);
    });

route.put("/:publisherId",
    bodyParser.json(),
    assertInput.bodyHas("name", "street", "email"),
    async (req: Request, res: Response) => {
        console.log("Route PUT /publisher/:publisherId");
        const data = await new PublisherManager().updatePublisher(req.params.publisherId, req.body);
        res.send(data);
    });

export { route };