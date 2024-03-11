import React from 'react';
<<<<<<< HEAD
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import Navbar from './pages/navbar';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql', // Update the URI with your GraphQL endpoint
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token'); // Update 'id_token' to 'token'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create an Apollo Client instance
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      
        <>
          {/* Navbar */}
          <Navbar />

          {/* Main content */}
          <div className="container">
            <Outlet />
          </div>

          {/* Footer */}
          <footer className="footer">
            <p>&copy; 2024 Your D&D Campaign Builder</p>
          </footer>
        </>
      
    </ApolloProvider>
  );
};

export default App;
=======
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Nav } from 'react-bootstrap';
import '../src/pages/Home';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>StoryWeaver AI</h1>
      </header>
      <Nav variant="tabs" className="justify-content-center">
        <Nav.Item>
          <Link to="/CharacterSheet" className="nav-link">Character Sheet</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/gameboard" className="nav-link">Gameboard</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/Signup" className="nav-link">Sign In</Link>
        </Nav.Item>
      </Nav>
      <div className="tab-content">
        {/* Content for the current tab will be rendered here */}
      </div>
    </div>
  );
};

export default Home;
>>>>>>> 86e370d (added bootstrap. and fixed some .jsx files as well)
