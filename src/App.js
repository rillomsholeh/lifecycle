import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    searchTerm: '',
    news: [],
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=58dbe4aef1424596a06fa3e07d288cec`;

    axios.get(url)
      .then(res => {
        this.setState({ news: res.data.articles });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://newsapi.org/v2/top-headlines?q=${this.state.searchTerm}&apiKey=58dbe4aef1424596a06fa3e07d288cec`;

    axios.get(url)
      .then(res => {
        this.setState({ news: res.data.articles });
      })
  }

  render() {
    return (
        <div>
		      <div style={{marginLeft:'980px', marginBottom:'70px', marginTop:'30px'}}>
                <form
                    className="input-group search" 
                    onSubmit={this.handleSubmit}>
                    <input className="form-control input" type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    <button 
                        className="btn btn-primary"
                        type="submit">Submit</button>
                </form>
            </div>

        {this.state.news.map((article, id) => (
          <div className="text-center mt-3" key={id}>
              <img style={{height:'260px', marginLeft:'400px'}} src={article.urlToImage} alt="news" />
             <h2 style={{textAlign: 'center'}}>{article.title}</h2>
             <p style={{textAlign:'center'}}>{article.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;