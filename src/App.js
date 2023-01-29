import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
        <table border={{style: '0px solid red'}}>
          <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
          </tr>
          <tr>
             <td>{post.userId}</td>
             <td>{post.id}</td>
             <td>{post.title}</td>
             <td>{post.body}</td>
          </tr>
          
        </table>

      {/* <h1>{post.title}</h1>
      <p>{post.body}</p> */}
    </div>
  );
}