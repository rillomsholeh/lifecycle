import React, { Component } from "react";

class App extends Component {
  state = {
    users: []
  };

  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        this.setState({
          users
        });
      });
  }

  
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>
              <p>Id:{user.id}</p>
              <p>Nama: ({user.name})</p>
              <p>userName: {user.username}</p>
              <p>Email: ({user.email})</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;