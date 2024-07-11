import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";

const app = express();

console.log("🚀 ~ Puerto configurado en:", process.env.PORT);
console.log("🚀 ~ Variable MONGO_URL:", process.env.MONGO_URL);
const PORT = process.env.PORT || 8080;

try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("🚀 ~ Conexión a MongoDB establecida");
} catch (error) {
    console.log("🚀 ~ Error al conectar a MongoDB:", error);
}

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1> <p>Hello World from Express</p>");
});
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
