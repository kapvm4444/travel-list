import React, { useState } from "react";
import Item from "./Item";

//=>
// Packing List
export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  //sorting Items based on the input order
  if (sortBy === "input") sortedItems = items;

  //sorting items based on the name
  if (sortBy === "name")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  //sorting items based on the checked status
  if (sortBy === "check")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className={"actions"}>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>SORT BY INPUT ORDER</option>
          <option value={"name"}>SORT BY INPUT ITEM NAME</option>
          <option value={"check"}>SORT BY CHECKED ITEM</option>
        </select>
      </div>
    </div>
  );
}
