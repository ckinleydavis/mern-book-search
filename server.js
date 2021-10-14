const express = require("express");
const mongoose = require("mongoose");
const routes = require("./server/routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
app.use(routes);

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/mern-book-search", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(require("./server/routes/api"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});