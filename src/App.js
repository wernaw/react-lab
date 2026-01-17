import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [title, setTitle] = useState('Wall-E');
    const movies = [
    {title: "Wall-E"},
    {title: "Pulp Fiction"},
    {title: "Matrix"},
    {title: "1670"},
];
    let message;
    if (title.length < 4) {
        message = "Title is too short.";
    }
    else if (title.length < 20) {
        message = "Title is fine.";
    }
    else {
        message = "Title is too long.";
    }

  return (
      <div className="container">
          <h1>My favourite movies to watch</h1>
          <ul>
              {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
          </ul>
          <h2>My favourite movie for today is {title}</h2>
          <p1>{title.length > 0 && <div>{message}</div>}</p1>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
          <input type="button" onClick={() => alert(title)} value="Show movie title"/>
      </div>
  );
}

export default App;
