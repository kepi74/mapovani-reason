// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Data$MapovaniMotyly = require("./Data.bs.js");

var MissingPost = Caml_exceptions.create("Mutation-MapovaniMotyly.MissingPost");

var resolvers = {
  upvotePost: (function (_, filter) {
      var match = Data$MapovaniMotyly.posts.find((function (post) {
              return +(post.id === filter.postId);
            }));
      if (match !== undefined) {
        match.votes[0] = match.votes[0] + 1 | 0;
        return match;
      } else {
        throw [
              MissingPost,
              "Couldn't find post with id " + String(filter.postId)
            ];
      }
    })
};

var typeDef = "\n  type Mutation {\n    upvotePost(postId: Int!): Post\n  }\n";

exports.typeDef = typeDef;
exports.MissingPost = MissingPost;
exports.resolvers = resolvers;
/* No side effect */
