import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'

import './App.css';

const App = () => (
    <Router><div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
        </div>
    </Router>
);

export default App;
