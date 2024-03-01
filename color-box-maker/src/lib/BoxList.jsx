import { Box } from "./Box.jsx";
import { useState } from "react";
import { NewBoxForm } from "./NewBoxForm.jsx";

export function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const add = box => setBoxes(b => [...b, box]);
  const remove = id => setBoxes(bs => bs.filter(b => b.id !== id));

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(b => (
        <Box
          key={b.id}
          id={b.id}
          width={b.width}
          height={b.height}
          backgroundColor={b.backgroundColor}
          removeBox={remove}
        />
      ))}
    </div>
  );
}