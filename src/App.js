import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import 'bulma/css/bulma.css';
import Main from './components/Main';
import { 
  Container,
  Section
} from 'bloomer';


const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
