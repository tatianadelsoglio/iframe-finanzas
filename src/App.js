import "./App.css";
import React from "react";
import Finanzas from "./components/ui/finanzas/Finanzas";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/ApolloClient";

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Finanzas />
      </ApolloProvider>
    </>
  );
};

export default App;
