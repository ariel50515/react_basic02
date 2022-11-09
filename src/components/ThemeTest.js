import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function ThemeTest() {
  console.log("ThemeTest");
  const { name, backgroundColor, color } = useContext(ThemeContext);

  const style = {
    backgroundColor,
    color,
    width: "200px",
    height: "200px",
  };

  return <div style={style}>hehe {name}</div>;
}