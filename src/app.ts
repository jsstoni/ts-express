import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(compression());

export default app;