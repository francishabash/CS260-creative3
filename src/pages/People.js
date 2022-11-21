import React from 'react';
import { Outlet, Link } from "react-router-dom";

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      seconds: 0 
    };
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  
    render(){
    const {isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class="body_div">
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
        
        <h1 class="mine">Famous people in Palestine</h1>
        <h3 class="mine">I am getting these names from an api call to an online list</h3>
        <ul>
          {items.map(item => (
            <li key={item.id} class="names">
              Name: {item.name} | Email: {item.email}
            </li>
          ))}
        </ul>
        <div class="mine">
        <br/>
        <p>Time spent on page</p>
        Seconds: {this.state.seconds}
      </div>
      <footer class="footer">
      <p class='data'>Francis Habash</p>
      <p class='data'><a href="https://github.com/francishabash/CS260-creative3">Github</a></p>
    </footer>
        </div>
      );
    }
      
    }
}

export default People;