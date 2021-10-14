const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/mern-book-search", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(require("./server/routes/api"));

const { ApolloServer } = require('apollo-server-express');
const server = await new ApolloServer({
  typeDefs,
  resolvers,
  context:authMiddleware
});

server.applyMiddleware({ app });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});