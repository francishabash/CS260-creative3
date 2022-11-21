import React from 'react';


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
                <a class="nav-link" href="index.html">Palestine<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="images.html">Images</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="history.html">History</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="people.html">People</a>
              </li>
            </ul>
          </div>
        </nav>
        
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
        
            </div>
        );
    }
}

export default Images;