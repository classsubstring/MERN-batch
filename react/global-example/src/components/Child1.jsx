import React, { useState } from "react";
import { useName } from "../global/NameContext";

function Child1() {
  const { name, setName } = useName();
  const [localName, setLocalName] = useState("Raman");
  return (
    <div className="p-10 bg-orange-400 text-white">
      <h1>Child 1 : {localName}</h1>
      <h1>Child 1 : {name}</h1>
      <button
        onClick={() => {
          setName("Mohan");
        }}
        className="bg-neutral-700 px-3 py-2 text-white rounded"
      >
        Change Name
      </button>
    </div>
  );
}

export default Child1;
