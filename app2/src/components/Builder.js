import React from "react";
import "./style.css";

function Builder(props) {
  return (
    <>
      <div class="builder">
        <h1>Blip Builder 2.0</h1>
        <p>Construa um bot! {props.count}</p>
        <button onClick={props.onIncrement}>Increment</button>
        <button onClick={props.onDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default Builder;
