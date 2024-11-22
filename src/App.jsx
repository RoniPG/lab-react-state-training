import "./App.css";
import Counter from "./components/counter/counter";
import LikeButton from "./components/like-button/like-button";

function App() {
  return (
    <div className="App container">
      <h1 className="mb-4"> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <Counter />
    </div>
  );
}

export default App;
