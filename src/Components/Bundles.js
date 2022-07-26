import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import LoggedInNav from "./LoggedInNav";

const Bundles = () => {
  const [loading, setLoading] = useState(false);
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    const getBundles = async () => {
      setLoading(true);
      const response = await axios.get("https://dealbuddy-backend.herokuapp.com/api/getBundles");
      setBundles(response.data);

      setLoading(false);
    };

    getBundles();
  }, []);

  return (
    <div>
      {localStorage.getItem("token") === null ? <Nav /> : <LoggedInNav />}
      <div className="bundles">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          bundles.map((bundle, i) => (
            <a href={bundle.productUrl + "?partner=matheot"} target="_blank" rel="noreferrer" key={i}>
              <div className="bundle-info" key={i}>
                <h1>{bundle.name}</h1>
                <img src={bundle.image} alt="bundle" key={i}></img>
                <h1>{bundle.blurb}</h1>
                <h1>{bundle.highlight}</h1>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default Bundles;
