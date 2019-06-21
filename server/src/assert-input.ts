import { Request, Response } from "express";

export function bodyHas(...parameterNames: string[]) {
    return (req: Request, res: Response, next: any) => {
        const missingParameter = parameterNames.find(parameterName => {
            return req.body[parameterName] === undefined;
        });
        if (missingParameter) {
            return res.status(400).json(
                {
                    code: 400,
                    message: `Missing body parameter: ${missingParameter}`
                });
        }
        else next();
    }
}
