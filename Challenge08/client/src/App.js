import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {Home,Login} from './containers';
import ExampleData from './containers/ExampleData'

const App = () => (
    <Router><div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/example" component={ExampleData}/>
        </div>
    </Router>
);

export default App;
