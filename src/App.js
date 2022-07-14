import "./App.css";
import Nav from "./Components/Nav";
import LoggedInNav from "./Components/LoggedInNav";
import Content from "./Components/Content"
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      {localStorage.getItem("token") === null ? <Nav/> : <LoggedInNav/>}
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
