import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
// import { setContext } from "apollo-link-context";

const wsurl = "wss://hasuragraphql-engine.herokuapp.com/v1alpha1/graphql";
const httpurl = "https://hasuragraphql-engine.herokuapp.com/v1alpha1/graphql";

  const httpLink = new HttpLink({
    uri: httpurl,
    fetch
  });

  // Create a WebSocket link:
  const wsLink = new WebSocketLink(
    new SubscriptionClient(wsurl, {
      reconnect: true,
      timeout: 30000
    })
  );

  // chose the link to use based on operation
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({
      addTypename: true
    })
  });


export default client;