import LoggedInNav from "./LoggedInNav";
import { useState } from "react";
import axios from "axios";
const Profile = () => {
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));
  let savedAlerts = JSON.parse(localStorage.getItem("emailList"));

  const [alerts, setAlerts] = useState([]);
    
    const findIndex = (id, array) => {
        for(let i = 0; i < array.length; i++){
            if(array[i].gameID === id){
                return i;
            }
        }
    }

    const deleteAlert = (id) => {
        let email = userDetails[1];
        axios.get(`https://www.cheapshark.com/api/1.0/alerts?action=delete&email=${email}&gameID=${id}`).then((res) => {
            console.log(res);
            if(res.data === true){
                let index = findIndex(id, savedAlerts);
                savedAlerts.splice(index, 1);
                console.log(savedAlerts);
                localStorage.setItem("emailList", JSON.stringify(savedAlerts));
                if(localStorage.getItem("emailList").length === 2){
                    localStorage.removeItem("emailList");
                }
                window.location.reload();
            }
        })
    }

  return (
    <div>
      <LoggedInNav />
      <div className="profile-container">
        <h1>{userDetails[0]}'s Alerts</h1>
        <div className="alert-container">
          {localStorage.getItem("emailList") === null ? <h1>Empty</h1> :savedAlerts.map((alerts, i) => (
            <div key={i} className="alert-container-info">
              <h1>{alerts.name}</h1>
              <h2>Alert is set at {alerts.price}</h2>
              <button onClick={() => deleteAlert(alerts.gameID)}>Unsubscribe</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
