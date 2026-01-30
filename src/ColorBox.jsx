import { ColorGame } from "./ColorGame";
// import "./index.css";

export default ColorGame;

export function ColorBox({ clr }) {
  const styles = {
    height: "1.5rem",
    width: "12rem",
    marginTop: "1rem",
    backgroundColor: clr,
  };
  return <div style={styles}></div>;
}
