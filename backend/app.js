import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorMiddleware from "./middlewares/error.middleware.js";
export const app = express();
app.set("trust proxy", 1);

app.use(
  cors({
   origin: [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
],
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Auth routes
import authRouter from "./routes/auth.routes.js";
app.use("/api/v1/auth", authRouter);

// book routes
import bookRouter from "./routes/book.routes.js";
app.use("/api/v1/book", bookRouter);

// Borrow routes
import borrowRouter from "./routes/borrow.routes.js";
app.use("/api/v1/borrow", borrowRouter);

// User routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/user", userRouter);

app.use(errorMiddleware);
