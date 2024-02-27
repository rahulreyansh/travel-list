export function Stats({ items }) {
  if (!items.length) return <p className="stats">Hiii</p>;
  const numItems = items.length;
  const numPacked = items.filter((ele) => ele.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items in your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
