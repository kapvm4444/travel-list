import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

//=>
// APP
export default function App() {
  //creating an array for the list as a state so we can change the array any time
  const [items, setItems] = useState([]);

  //Add 1 item to the list
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  //Delete item from the list
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //toggle item checked or unchecked from list
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  //clearing list
  function handleClearList() {
    const confirm = window.confirm(
      "Are you really want to delete all the items?",
    );

    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClear={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
