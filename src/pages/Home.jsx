import GameCard from "../components/GameCard";

function Home() {
  const games = [
    { id: 1, title: "Hollow Knight", release_date: "2017" },
    { id: 2, title: "Elden Ring", release_date: "2022" },
    { id: 3, title: "Clair Obscur: Expedition 33", release_date: "2025" },
  ];

  return (
    <div className="home">
      <div className="games-grid">
        {games.map((game) => (
          <GameCard />
        ))}
      </div>
    </div>
  );
}
