import logo from "./logo.svg";
import "./App.css";

// Styles
const headingStyle = {
  color: "salmon",
  textAlign: "center",
};
const textStyle = {
  color: "tomato",
};
const style = {
  backgroundColor: "#282C34",
  color: "#fff",
};

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

  // player data
  const sportsman = ['Rafael Nadal','Tiger Woods'];
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
      <section style={style}>
        <Person name="Mashrafee Mortaza" job="Cricketer" />
        <Person name="Tamim Iqbal" job="Cricketer" />
        <Person name="Leo Messi" job="Footballer" />
        <Person name={sportsman[0]} job="Tennis Player" />
      </section>
    </div>
  );
}

// Create Component
function Person(props) {
  console.log(props);
  return (
    <>
      <div style={{ border: "2px solid gold", marginBottom: "5px" }}>
        <h1>Name: {props.name}</h1>
        <p>Job: {props.job}</p>
      </div>
    </>
  );
}
export default App;
