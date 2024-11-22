import "./App.css";
import ClickablePicture from "./components/clickable-picture/clickable-picture";
import Counter from "./components/counter/counter";
import Dice from "./components/dice/dice";
import LikeButton from "./components/like-button/like-button";

function App() {
  return (
    <div className="App container">
      <h1 className="mb-4"> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice />
    </div>
  );
}

export default App;
