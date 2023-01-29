import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wheather: null
    };
  }

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        //console.log('javascript object: ', obj)
        // this.setState({ wheather: obj });
      });
  }
  
  componentDidMount() {
    console.log("get api compnents Did Mount");
    this.fetchData();
  }
 render() {
    return (
      <div>
        {this.state.wheather
          && <div key={this.state.wheather.city_info.name}>{this.state.wheather.city_info.name}</div>
        }
      </div>
    )
  }
}


export default App;