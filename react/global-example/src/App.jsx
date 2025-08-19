import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";
import { NameProvider, useName } from "./global/NameContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    // 4. wrap everying in NameProvider
    <NameProvider>
      <div className="p-10 m-10 bg-red-100">
        <h1 className="text-4xl font-bold">App</h1>
        <h1 className="text-3xl">Welcome to Global Examkple Project</h1>

        <Parent />
      </div>
    </NameProvider>
  );
}

export default App;
