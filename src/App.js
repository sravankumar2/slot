import "./App.css";
import Home from "./components/Content/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Nav/Header";

function App() {
  const loginStatus = localStorage.getItem("loginStatus");

  if (!loginStatus) {
    localStorage.setItem("loginStatus", false);
    localStorage.setItem("balance", 100);
  }

  return (
    <div className="App">
      <Header Status={loginStatus} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
