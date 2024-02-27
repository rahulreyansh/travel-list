import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  //Lifting State Up
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItems((items) =>
      items.map((ele) =>
        ele.id === id ? { ...ele, packed: !ele.packed } : ele
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        toggle={handleToggle}
        clearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
