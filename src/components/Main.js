import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './pages/Profile';
import Cover from './Cover';


const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/cover' component={Cover}/>
      </Switch>
    </main>
  )

  export default Main;