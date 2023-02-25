import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=58dbe4aef1424596a06fa3e07d288cec`
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=${searchTerm}&apiKey=58dbe4aef1424596a06fa3e07d288cec`
      )
      .then((res) => {
        setArticles(res.data.articles);
      })
  };

  return (
    <div className="container">
  	<div style={{marginLeft:'980px', marginBottom:'70px', marginTop:'30px'}}>
      <form className="input-group mb-2 mt-2 search"
        onSubmit={handleSubmit}>
        <input className="form-control input" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="btn btn-danger" type="submit">Submit</button>
      </form>
    </div>
      {articles.map((article, id) => (
        <div className="text-center mt-3" key={id}>
          <img style={{height:'260px', marginLeft:'400px'}} src={article.urlToImage} alt="news" />
          <h2 style={{textAlign: 'center'}}>{article.title}</h2>
          <p style={{textAlign:'center'}}>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;