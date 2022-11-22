import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema = swagger
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready ar ${url}`);
});
