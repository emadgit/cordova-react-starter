import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Posts from './components/posts'
import PostForm from './components/postForm'
import {Provider} from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <Route exact={true} path='/' component={Posts}/>
            <Route path='/addNewPost' component={PostForm}/>
          </div>
        </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
