import './App.css';
import {useState} from "react";

function App() {
    const [title, setTitle] = useState('Wall-E');

    function handleChange(event) {
        setTitle(event.target.value);
    }

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
    <div>
        <h1>My favourite movies to watch</h1>
        <h2>My favourite movie for today is {title}</h2>
        <p1>{title.length > 0 && <div>{message}</div>}</p1>
        <input type="text" value={title} onChange={handleChange}/>
    </div>
  );
}

export default App;
