import React, { useState } from "react";

function Child({ items, addItem, deleteItem }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New item"
      />
      <button
        onClick={() => {
          addItem(text);
          setText("");
        }}
      >
        Add
      </button>

      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => deleteItem(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Child;