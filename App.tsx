/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from "react";
 import AppNavigation from "./src/navigation/navigation";
 import { Provider } from "react-redux";
 import store from "./src/store/index.store";
 import { ApolloProvider } from '@apollo/client';
import { client } from "./src/definitions/queries.definition";
 
 const App = () => {
   return (
     <ApolloProvider client={client}>
       <Provider store={store}>
         <AppNavigation />
       </Provider>
     </ApolloProvider>
   );
 };

 export default App;
