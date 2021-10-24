import "dotenv/config";
import express from "express";
import UserController from "./app/controllers/UserController";

const app = express();

app.use(express.json());

app.post("/user", UserController.store);

app.listen(3333, () => {
  console.log("Server runnning on localhost:3333");
});
