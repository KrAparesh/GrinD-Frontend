// import React from 'react'
// import App from './App'
// import ReactDOM from 'react-dom';
// import {createHttpLink} from 'apollo-link-http'

// import { setContext } from 'apollo-link-context';

// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


// const httpLink = createHttpLink({
//     uri: 'http://localhost:5000'
// });

// const authLink = setContext((_, { headers }) => {
//     const token = localStorage.getItem('jwtToken');

//     return {
//       headers: {
//         ...headers,
//         Authorization: token ? `Bearer ${token}` : ''
//       },
//     }
//   });

// const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
// });


// ReactDOM.render(
//     <ApolloProvider client={client}>
//         <App />
//     </ApolloProvider>,
//     document.getElementById('root')    
// );