import { useState } from "react";
import "./List.css";

export default function List() {
  const [items, setItems] = useState(["Finish this challenge!"]);
  const [newState, setNewState] = useState("");

  const handleAddItem = () => {
    if (newState.trim() !== "") {
      setItems([...items, newState]);
      setNewState("");
    }
  };

  const handleSetState = (event) => {
    setNewState(event.target.value);
  };

  const handleDeleteItem = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
  };

  return (
    <div className="list-container">
      <h2 className="list-title">To Do List</h2>
      <div className="list-input">
        <input value={newState} onChange={handleSetState} />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ol className="list-items">
        {items.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => handleDeleteItem(item)}>X</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
