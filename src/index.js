import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const myReducer = (state, action) => {
  switch (action.type) {
    case "countUp":
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};

function App() {
  // 不自己写下都不知道，原来这个地方传入一个初始值
  const [state, dispatch] = useReducer(myReducer, { count: 0 });
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "countUp" })} />
      <p>{state.count}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
