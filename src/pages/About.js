import React from 'react';


class About extends React.Component {
    render (){
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
        
        
        <div class="photo">
          <img class="my-image" src="images/port-me.JPG"/>
        </div>
        
        <div class="container">
        <p class="para">My name is Francis Habash. I am from Bethlehem, Palestine studying computer science at BYU. I love going outdoor and
        having fun with friends. I grew all my life in Palestine so this is a really impactfull project for me to be able tp create a website where I can show my country Palestine
        and expose more people to what is happening there.</p>
        
        <p class="para">I am very passionate about my country and would love every person to get to know more about the culture and history. palestine has a lot of history and culture more that anywhere in the world. where ever you go you will find old
        attraction sites that have been build more than 1000 year ago.</p>
        
        </div>
        </div>
        );
    }
}

export default About;