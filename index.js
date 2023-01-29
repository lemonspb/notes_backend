// // import { app } from "../helpers/runApp.js";
// import express from "express";
// import runMongo from "./src/helpers/mongo.js";
// // import note from "../routes/notes.routes.js";
// // import auth from "../routes/auth.routes.js";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());
// // app.use("/note", note);
// // app.use("/auth", auth);

// void (async () => {
//   console.log("Starting mongo");
//   await runMongo();
//   console.log("Mongo connected");
//   await app.listen(process.env.PORT, () => {});
// })();

// app.get("/", (req, res) => {
//   res.send("Hey this is my API running 🥳");
// });

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(1111, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
// export default app;
