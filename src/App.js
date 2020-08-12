import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/Join.js';
import Chat from './components/Chat.js';

const App = () => (
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
    </Router>
);

export default App;