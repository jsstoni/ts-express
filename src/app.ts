import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import routes from "../utils/useRouter";
import { errorHandler } from "../utils/middlewares/errorMiddleware";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(routes);
app.use(errorHandler);

export default app;