import React, { Component, StrictMode } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Supervise } from './routers/Supervise';

export default class App extends Component {
    render () {
        return (<Router>
            <Route path='/vise' component={Supervise} />
        </Router>)
    }
}