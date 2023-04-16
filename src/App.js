import Button from "./Button";
import styled from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length >5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  useEffect(() => {
      console.log("Change Counter", counter);
  }, [counter]);

  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styled.title}>Welcome back!</h1>
      <Button text={"Continue"}/>
      <h2>{counter}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
