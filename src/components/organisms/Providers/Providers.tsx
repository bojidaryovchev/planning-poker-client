import { ApolloProvider } from "@apollo/client";
import apolloClient from "@lib/apolloClient";
import React, { PropsWithChildren } from "react";

const Providers: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default Providers;
