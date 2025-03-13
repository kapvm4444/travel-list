import { initialItems } from "../data";
import React from "react";
import Item from "./Item";

//=>
// Packing List
export default function PackingList() {
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
