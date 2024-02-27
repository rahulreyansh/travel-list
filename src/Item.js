export function Item({ item, onDeleteItem, toggleCheck }) {
  return (
    <li>
      <input type="checkbox" onClick={() => toggleCheck(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
