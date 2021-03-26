import React from "react";
import "./App.scss";
import NumberButtons from "./components/NumberButtons/NumberButtons";
import Result from "./components/Result/Result";

function App() {
  return (
    <main className="Calculator">
      <Result result={0} />
      <NumberButtons />
    </main>
  );
}

export default App;
