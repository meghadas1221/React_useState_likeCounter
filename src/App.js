import "./styles.css";
import { useState } from "react";

// react app
// var likeCounter = 0;
export default function App() {
  [likeCounter, setLikeCounter] = useState(0);
  function likeClickHandler() {
    setLikeCounter(likeCounter + 1);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <button onClick={likeClickHandler}>Like Me!</button>
      {likeCounter}
    </div>
  );
}
