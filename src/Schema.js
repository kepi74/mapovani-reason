var graph = require('graphql-tools')
var Posts$AuthorsAndPosts    = require("./Posts.bs.js");
var Query$AuthorsAndPosts    = require("./Query.bs.js");
var Author$AuthorsAndPosts   = require("./Author.bs.js");
var Mutation$AuthorsAndPosts = require("./Mutation.bs.js");

var typeDefs = Query$AuthorsAndPosts.typeDef + (Mutation$AuthorsAndPosts.typeDef + (Author$AuthorsAndPosts.typeDef + Posts$AuthorsAndPosts.typeDef));

var resolvers = {
  Query: Query$AuthorsAndPosts.resolvers,
  Mutation: Mutation$AuthorsAndPosts.resolvers,
  Author: Author$AuthorsAndPosts.resolvers,
  Post: Posts$AuthorsAndPosts.resolvers
};

exports.schema = graph.makeExecutableSchema({
  typeDefs,
  resolvers,
});