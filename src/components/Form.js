import React from "react";

export default function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip? 🤔</h3>

      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>

      <input type="text" placeholder="...Items" />

      <button>Add</button>
    </form>
  );
}
