import React from "react";

//=>
// Footer
export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className={"stats"}>
        <em>Add Items from above and get started with your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedItems === numItems
          ? "You have packed all of your Items, Now you are ready for your trip 🌎"
          : `You have ${numItems} items in your list and ${packedItems} items are
        packed (${percentage}%)`}
      </em>
    </footer>
  );
}
