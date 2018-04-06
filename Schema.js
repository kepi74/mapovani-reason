const graph = require("graphql-tools");
const Posts = require("./lib/js/src/Posts.bs.js");
const Query = require("./lib/js/src/Query.bs.js");
const Author = require("./lib/js/src/Author.bs.js");
const Mutation = require("./lib/js/src/Mutation.bs.js");

const typeDefs =
  Query.typeDef + (Mutation.typeDef + (Author.typeDef + Posts.typeDef));

const resolvers = {
  Query: Query.resolvers,
  Mutation: Mutation.resolvers,
  Author: Author.resolvers,
  Post: Posts.resolvers
};

exports.schema = graph.makeExecutableSchema({
  typeDefs,
  resolvers
});
