import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //import external css styles
import { SpeedInsights } from "@vercel/speed-insights/react";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
        <span className="akram">
          <strong>
            @Akram14. Coded With Love :) <br></br>
          </strong>
          From Jonas Schmedtmann Course
        </span>
      </div>
      <SpeedInsights />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  console.log(pizzas.length);
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas ? (
        //react fragment
        <>
          {/* {react fragment} */}
          <p>
            Authentic Italian Cuisine. {pizzas.length} Creative Dishes To Choose
            From. All From Our Stone Oven, All Organic, All Delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We Are Still Working On Our Menu, Please Come Back Later.</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        imageName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mashrooms"
        price={12}
        imageName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We Are Currently Open");
  //   } else {
  //     alert("Sorry, We Are Closed");
  //   }
  //   return React.createElement("footer", null, "We're Currently Open!"); instead
  return (
    <footer className="footer">
      <p style={{ textAlign: "center" }}>{`Its ${hours}:${minutes} Now`}</p>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p style={{ textAlign: "center" }}>
          We Are Happy To Welcome You Between {openHour}:00 And {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p style={{ textAlign: "center" }}>
        We're Open from {openHour}:00 to {closeHour}:00, Come Visit Us Or Order
        Online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
// React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
