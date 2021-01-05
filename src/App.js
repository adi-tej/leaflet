import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </div>
    );
}

export default App;
