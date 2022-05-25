const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    greeting(name: String!): String
  }
`;

const resolvers = {
  Query: {
    greeting: (parent, { name }) => `Hello there ${name}`,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 9000 })
  .then((serverInfo) => console.log(`Server running at ${serverInfo.url}`));
