import express, { NextFunction, Request, Response } from "express";
const router = express.Router();

router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    res.status(200).send("hola mundo");
});

router.get("/error", (_req: Request, _res: Response, next: NextFunction) => {
    try {
        throw new Error("Error");
    } catch {
        next("My custom Error");
    }
});

export default router;