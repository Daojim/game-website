import "./App.css";
import GameCard from "./components/GameCard";

function App() {
  return (
    <>
      <GameCard game={{ title: "Jimmy's Game", release_date: "2025" }} />
      <GameCard game={{ title: "AAA Game", release_date: "2025" }} />
    </>
  );
}

export default App;
