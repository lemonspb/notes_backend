// import { app } from "../helpers/runApp.js";
import express from "express";
import runMongo from "../helpers/mongo.js";
import note from "../routes/notes.routes.js";
import auth from "../routes/auth.routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/note", note);
app.use("/auth", auth);

void (async () => {
  console.log("Starting mongo");
  await runMongo();
  console.log("Mongo connected");
  await app.listen(process.env.PORT, () => {});
})();
