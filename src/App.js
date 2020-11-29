import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import SearchPage from './Component/SearchPage';
import Recommended from './Component/Recommended';
import { BrowserRouter as Router, Switch, Route}from 'react-router-dom';

function App() {
  return (
    <div className="app">
   
    <Router>
    <Header/>
    <Switch>
    <Route path="/search/:searchTerm">
    <div className="app__page">
    <Sidebar />
    <SearchPage/>
    </div>
    </Route>

    <Route path="/">
    <div className="app__page">
    <Sidebar />
    <Recommended></Recommended>
   
    </div>
    </Route>

    </Switch>
    </Router>

     
   

    
    </div>
  );
}

export default App;
