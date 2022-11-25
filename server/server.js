
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

//Express Routes(NC)
const { typeDefs, resolvers } = require("./schemas");

const app = express();
const PORT = process.env.PORT || 3001;

//Creating ApolloServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);



// const express= require("express");
// const {ApolloServer}= require("apollo-server-express");
// const path = require("path");

// const { typeDefs, resolvers } = require("./schemas");
// const { authMiddleware } = require("./utils/auth");
// const db = require("./config/connection");


// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Serve up static assets
// // app.use("/images", express.static(path.join(__dirname, "../client/images")));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// // });

// const startApolloServer = async (typeDefs, resolvers) => {
//     await server.start();
//     server.applyMiddleware({ app });
  
//     db.once("open", () => {
//       app.listen(PORT, () => {
//         console.log(`🌍 Now listening on localhost:${PORT}`);
//         console.log(
//           `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
//         );
//       });
//     });
//   };
  
//   startApolloServer(typeDefs, resolvers);