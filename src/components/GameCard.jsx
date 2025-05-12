function GameCard({ game }) {
  function onFavouriteClick() {}

  return (
    <div className="game-card">
      <div className="game-coverart">
        <img src={game.url} alt={game.title} />
        <div className="game-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            ♥
          </button>
        </div>
      </div>

      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.release_date} </p>
      </div>
    </div>
  );
}

export default GameCard;
