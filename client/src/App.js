import React from 'react';
import ApolloClient from 'apollo-boost'; 
import { ApolloProvider } from 'react-apollo'; 
import Heroes from './components/Heroes'; 
import './App.css';
import logo from './logo.png'

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
     <img src={logo} alt="OverWatch" 
     style = {{ width:200, display: 'block', margin: 'auto' }}/>
      <center>
        <h1 className="display-4">OverWatch Heroes</h1>
     <div className="card-columns">
       <Heroes />
     </div>
     </center>
    </div>
    </ApolloProvider>
  );
}

export default App;


