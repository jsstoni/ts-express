import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log(err);
    res.status(500).send({ error: "Something went wrong" });
}