import express, { json } from "express";
import dotenv  from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    // console.log("get root");
    res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server started on port ${PORT}`);
});