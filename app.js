const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

// import schema from generated bucklescript files
const { schema } = require("./src/Schema.js");

const app = express();

const { PORT = 3000, UP_STAGE = "" } = process.env;
const endpointURL = `/`;

// The GraphQL endpoint
app.post(endpointURL, bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT, () => console.log("graphQL server running"));
