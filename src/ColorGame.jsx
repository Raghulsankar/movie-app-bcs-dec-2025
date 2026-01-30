import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function ColorGame() {
  // state to store input value
  const [color, setColor] = useState("green");
  const [colorList, setColorList] = useState(["crimson", "pink", "orange"]);
  // const [click, setClick] = useState(colorList);
  const styles = {
    backgroundColor: color,
  };

  return (
    <div>
      {/* Input */}
      <input
        type="text"
        placeholder="Favorite color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
      />
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>

      {/* Echo on screen */}
      <h2>{color}</h2>
      {/* <ColorBox />
            <ColorBox />
            <ColorBox /> */}

      {/* colorList is an array of string so we use map  */}

      {colorList.map((clr) => (
        <ColorBox clr={clr} />
      ))}
    </div>
  );
}
