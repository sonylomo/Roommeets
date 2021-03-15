import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 8080;
const connection_url =
  "mongodb+srv://admin:gBxovpODasonohtX@cluster0.yqqtz.mongodb.net/tindevdb?retryWrites=true&w=majority";

// middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/", (req, res) => {
  res.status(200).send("Ssup Sony 😏");
});

app.post("/tindev/cards", (req, res) => {
  const dbCard = req.body;

  /* creates new document */
  Cards.create(dbCard, (err, data) => {
    try {
      res.status(201).send(data);
    } catch {
      res.status(500).send(err);
    }
  });
});

app.get("/tindev/cards", (req, res) => {
  Cards.find((err, data) => {
    try {
      res.status(200).send(data);
    } catch {
      res.status(500).send(err);
    }
  });
});

// listener
app.listen(port, () => {
  console.log("We're up and running!!");
});
