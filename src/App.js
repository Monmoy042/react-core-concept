import React, { useState, useEffect } from "react";
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
const btn = {
  marginBottom: "2px",
  height: "40px",
  width: "150px",
  backgroundColor: "blue",
  color: "#fff",
  outline: "none",
  border: "1px solid #fff",
  borderRadius: "5px",
  cursor: "pointer",
};
var productStyle = {
  backgroundColor: "cyan",
  color: "#000",
  border: "2px solid green",
  marginBottom: "5px",
  borderRadius: "5px",
};

// App Component
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

  // Skills array
  // const skills = ["HTML", "CSS", "JavaScript", "ReactJS"];
  // skills.map((element) => {
  //   // console.log(element);
  //   const skillName = element;
  //   console.log(skillName);
  //   return skillName;
  // });

  // Product Object
  const products = [
    { title: "Phone", price: "26000 BDT" },
    { title: "Laptop", price: "55000 BDT" },
    { title: "TV", price: "45000 BDT" },
  ];
  let productsName = products.map((product) => product.title);
  console.log(productsName);

  // player data
  const sportsman = ["Rafael Nadal", "Tiger Woods"];
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
      <section style={productStyle}>
        {/* Individual Product Get from the Product Array */}
        {/* <Product name={products[0].title} price={products[0].price} />
        <Product name={products[1].title} price={products[1].price} />
        <Product name={products[2].title} price={products[2].price} /> */}

        {/* Here we use map function to eliminate all the repetitive code */}
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </section>

      <section>
        <Skills />
      </section>

      <section>
        {/* Here we will practice  on state in reactJS*/}
        <Counter />
      </section>

      {/* Dynamic Users */}
      <section>
        <Users />
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

// Product info
function Product(props) {
  // const { name, price } = props;
  // console.log(props);
  const { title, price } = props.product;

  return (
    <>
      <div>
        <h1>Title: {title}</h1>
        <h3>Price: {price}</h3>
        <button style={btn}>Buy Now</button>
      </div>
    </>
  );
}

// New Component (skills)
function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS"];
  return (
    <div>
      <h2>Skills List</h2>
      <ul style={{ listStyle: "none" }}>
        {skills.map((skillName, item) => {
          return <li key={item}>{skillName}</li>;
        })}
      </ul>
    </div>
  );
}

//Counter component
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    // console.log("Clicked");
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

// Data Load from API to a component
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log("Calling Effect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {/* {console.log(users)} */}
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
