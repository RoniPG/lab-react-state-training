import "./App.css";
import LikeButton from "./components/like-button/like-button";

function App() {
  return (
    <div className="App container">
      <h1 className="mb-4"> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
    </div>
  );
}

export default App;
