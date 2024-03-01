export function Box({ id, width, height, backgroundColor, removeBox }) {
  return (
    <div>
      <div style={{ width: `${width}em`, height: `${height}em`, backgroundColor: backgroundColor }}></div>
      <button onClick={() => removeBox(id)}>x</button>
    </div>
  );
}