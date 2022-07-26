import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import Nav from "./Nav";
import LoggedInNav from "./LoggedInNav";
const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  let url = window.location.pathname;
  let name = url.replace("/searchResults/", "");
  let savedGames = [];

  useEffect(() => {
    const getGames = async () => {
      setLoading(true);
      const response = await axios.get("https://dealbuddy-backend.herokuapp.com/api/search", {
        params: {
          name: name,
        },
      });
      let results = response.data;
      setGames(results);

      setLoading(false);
    };

    getGames();
  }, []);

  const addToEmailList = (gameID, price, name, thumb) => {
    savedGames = [];
    let user = JSON.parse(localStorage.getItem("userDetails"));
    let userEmail = user[1];
    let savedGame = { gameID, price, name, thumb };

    if (localStorage.getItem("emailList") === null) {
      savedGames.push(savedGame);
      localStorage.setItem("emailList", JSON.stringify(savedGames));
      alert(
        "Price alert has been set. You will receive an email if the price drops below the current price. To delete alerts go to your profile!"
      );
    } else {
      let savedAlerts = JSON.parse(localStorage.getItem("emailList"));
      savedGames.push(savedGame);
      let flag = false;
      for (let index = 0; index < savedAlerts.length; index++) {
        if (savedAlerts[index].gameID === savedGames[0].gameID) {
          alert("FAILED game already has an alert!");
          flag = true;
          return;
        }
      }

      if (flag === false) {
        for (let index = 0; index < savedAlerts.length; index++) {
          savedGames.push(savedAlerts[index]);
          localStorage.removeItem("emailList");
          localStorage.setItem("emailList", JSON.stringify(savedGames));
        }
        alert(
          "Price alert has been set. You will receive an email if the price drops below the current price. To delete alerts go to your profile!"
        );
      }
    }

    axios
      .get(
        `https://www.cheapshark.com/api/1.0/alerts?action=set&email=${userEmail}&gameID=${gameID}&price=${price}`
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      {localStorage.getItem("token") === null ? <Nav /> : <LoggedInNav />}
      <div className="search-game-container-box">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          games.map((game, i) => (
            <div key={i} className="search-game-container">
              <a
                href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`}
              >
                <div className="search-game-info">
                  <h1>{game.external}</h1>
                  <img src={game.thumb} alt="game thumbnail"></img>
                  <h1>{"$" + game.cheapest}</h1>
                </div>
              </a>
              {localStorage.getItem("token") === null ? (
                <p></p>
              ) : (
                <div onClick={() => addToEmailList(game.gameID, game.cheapest, game.external, game.thumb)}>
                  <AiOutlineBell size={25} />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
