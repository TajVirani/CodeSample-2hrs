import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://alt.edge.mile-two.com/api/graphql",
    cache: new InMemoryCache(),
});

export default client;