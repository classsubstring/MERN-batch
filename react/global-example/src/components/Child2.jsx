import React from "react";
import { useName } from "../global/NameContext";

function Child2() {
  const ob = useName();
  return (
    <div className="p-10 bg-orange-400 text-white">
      <h1>Child2 : {ob.name}</h1>
    </div>
  );
}

export default Child2;
