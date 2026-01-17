import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);

    function handleAddMovie() {
        const movie = {
            title: title,
            year: year,
        };
        setMovies([...movies, movie]);
        setTitle('');
        setYear('');
    }
    //const movies = [
    //{title: "Wall-E"},
    //{title: "Pulp Fiction"},
    //{title: "Matrix"},
    // ];

  return (
      <div className="container">
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>
              {movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
          </ul>
          <h2>Add Movie</h2>
          <label>Title</label>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>

          <label>Year</label>
          <input type="text" value={year} onChange={(event) => setYear(event.target.value)}/>

          <button onClick={handleAddMovie}>Add movie</button>
      </div>
  );
}

export default App;
