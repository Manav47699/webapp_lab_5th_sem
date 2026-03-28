import React, { useState } from "react";
import Child from "./Child";    //same level so only ./ we do

function Parent() {
  const [items, setItems] = useState(["Apple", "Banana"]);

  
  const addItem = (newItem) => {
    if (newItem) {                            //checking if the input is empty or not
      setItems([...items, newItem]);           // append it in a new array with all the stuffs/elemets that was in items before
    }
  };


  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parent Component</h1>
      <Child items={items} addItem={addItem} deleteItem={deleteItem} />
    </div>
  );
}

export default Parent;