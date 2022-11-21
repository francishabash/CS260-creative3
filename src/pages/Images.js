import React from 'react';
import { Outlet, Link } from "react-router-dom";

class Images extends React.Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
          
          <img class="navbar-brand" src="images/Palestine.png" width="50" height="50" />
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/home">home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/images">Images</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/history">History</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/people">People</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
        
        <h1 class="header"> Palestine Images</h1>
        
        
            <div class="photo-grid">
                <div class="photo-grid-item image">
                    <img src="images/p-flag.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/p1.jpeg" />
                </div>
                <div class="photo-grid-item image">
                    <img src="images/nativity.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/christmas.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/mar-saba.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/wall.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/beach.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/nazareth.jpeg"/>
                </div>
                <div class="photo-grid-item image">
                    <img src="images/bethlehem.jpeg"/>
                </div>
            </div>
        
        <footer class="footer">
      <p class='data'>Francis Habash</p>
      <p class='data'><a href="https://github.com/francishabash/CS260-creative3">Github</a></p>
    </footer>
            </div>
        );
    }
}

export default Images;