import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Projects } from './Projects';
import { Homepage } from './Homepage';
import { About } from './About';


class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Router>
            <React.Fragment>
              <div id="anchor-tab">
                <Link exact to="/">Home</Link>
                <Link exact to="/about">About Me</Link>
                <Link exact to="/projects">Projects</Link>
              </div>
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route exact path="/" component={Homepage} />
            </React.Fragment>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;