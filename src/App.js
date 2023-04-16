import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthContext, AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import Error from './pages/Error';
import Roadmap from './pages/Roadmap';

import Layout from './pages/Layout';


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Container>
        <MenuBar />
          <Routes>
            {/* TODO: Fix AuthRoute */}
            <Route exact path = "/" element = {<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Roadmap" element={<Roadmap />} />
            <Route path = "*" element = {<Error />} />
          </Routes>
      </Container>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
