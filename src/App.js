import React from "react";
import "./styles.css";
import MovieSeatPicker from "./MovieSeatPicker";

export default function App() {
  const [selected, setSelected] = React.useState(null);
  return (
    <div className="App">
      <h2>{selected}</h2>
      <MovieSeatPicker setSelected={setSelected} />
    </div>
  );
}
