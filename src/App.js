import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="jumbotron">
          <h1 className="display-3">Mozart</h1>
          <p class="lead">Container orchestration in Go</p>
          <button type="button" className="btn btn-success">Get Started</button>
        </div>

        <div className="container">
        <div className="row">

          <div class="card col-md-4 col-sm-12">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>

          <div class="card col-md-4 col-sm-12">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>

          <div class="card col-md-4 col-sm-12">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>

        </div>
      </div>

      <footer class="footer">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    </div> // App.js
    );
  }
}

export default App;
