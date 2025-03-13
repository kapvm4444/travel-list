import React, { useState } from "react";

//=>
// Input form for inserting data
export default function Form({ onAddItem }) {
  //states
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //handling the submit of form
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, id: Date.now(), packed: false };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
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
        placeholder="Item name..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
