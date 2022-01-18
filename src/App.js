import logo from "./logo.svg";
import "./App.css";

function App() {
  var name = "Roger Federer";
  var player = {
    name: "Roger Federer",
    job: "Tennis Player",
  };
  var player2 = {
    name: "Novak Djokovic",
    job: "Tennis Player",
  };
  const headingStyle = {
    color: "salmon",
    textAlign: "center",
  };
  const textStyle = {
    color: "tomato",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello react</h1>
      </header>
      <section>
        {/* Dynamic Data and Dynamic Style in ReactJS */}
        <p>Hello World!!!!</p>
        <p>Hello World Again</p>
        <p>{2 + -5 + 10 * 2 + 3 / (30 + 60 - (40 + 30))}</p>
        <p>name: {name}</p>
        <br />
        <h1 style={headingStyle}>Player Name: {player.name}</h1>
        <p style={textStyle}>Player's Job: {player.job}</p>
        <h1 style={headingStyle}>Player Name: {player2.name}</h1>
        <p style={textStyle}>Player's Job: {player2.job}</p>
      </section>
    </div>
  );
}

export default App;
