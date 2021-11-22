import React, { useState } from "react";
import ReactDOM from "react-dom";

// Retorna uma promise para o componente, o resultado da promise é o componente carregado
const Builder = React.lazy(() => import("app2/Builder"));

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 style={{ background: "yellow", width: "100%", height: "50px " }}>Navbar</h1>
      {/* Quando todas as dependencias necessárias forem carregadas, o componente é renderizado */}
      <React.Suspense fallback="Loading Builder...">
        <Builder count={count} onIncrement={() => setCount(count + 1)} onDecrement={() => setCount(count - 1)} />
      </React.Suspense>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
