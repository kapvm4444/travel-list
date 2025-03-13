/*
import "./index.css";
import React, { useState } from "react";
import { initialItems } from "./data";

initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

//=>
// APP
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

//=>
// Main Heading
function Logo() {
  return <h1>Going Far Away 🏖️</h1>;
}

//=>
// Input form for inserting data
function Form() {
  //states
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //handling the submit of form
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, id: Date.now(), packed: false };
    console.log(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🤔</h3>

      <select
        onChange={(e) => setQuantity(e.target.value * 1)}
        value={quantity}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="...Items"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

//=>
// main body for list of items
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

//=>
// Items in the list
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

//=>
// Footer
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in your list and X items are packed (X%)</em>
    </footer>
  );
}
*/
