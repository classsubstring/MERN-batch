import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useName } from "../global/NameContext";

function Parent() {
  const { name, setName } = useName();
  return (
    <div className=" bg-green-200 p-10 ">
      <h1 className="text-3xl">Parent</h1>
      <p>This is parent component</p>
      <h1>Name : {name}</h1>
      <div className="flex gap-1">
        <Child1 />
        <Child2 />
      </div>
    </div>
  );
}

export default Parent;
