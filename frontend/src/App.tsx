import React from 'react';
import './App.scss';
import BookList from './components/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddBook from './components/AddBook';
import styled from 'styled-components';

const AppContainer = styled.div`
width: 100 %;
height: 100 %;
`;

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <BookList />
        <AddBook />
      </AppContainer>
    </ApolloProvider>
  );
}

export default App;
