import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import LoggedInNav from "./LoggedInNav";

const Games = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      setLoading(true);
      const response = await axios.get("https://deal-buddy-78e1f7201a81.herokuapp.com/api/getGames");
      setGames(response.data);

      setLoading(false);
    };

    getGames();
  }, []);

  const goToLink = (game) => {
    window.location.href = game.link;
  };

  return (
    <div>
      {localStorage.getItem("token") === null ? <Nav /> : <LoggedInNav />}
      <div className="game-container">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          games.map((game, i) => (
            <div key={i}>
              <a href={game.link} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                <div  className="game-info-list">
                  <h1>{game.name}</h1>
                  <h1>${game.salePrice}</h1>
                  <h1 style={{ textDecoration: "line-through" }}>
                    {game.originalPrice}
                  </h1>
                  <h1>{game.store}</h1>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Games;
