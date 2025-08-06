import { useState } from "react";

export default function Heading({ heading = "Heading" }) {
  const [userActive, setUserActive] = useState(true);

  function handleClick() {
    setUserActive(!userActive);
  }
  return (
    <div className="flex flex-col justify-center items-center my-5 ">
      <h1 className="text-3xl text-center font-extrabold">{heading}</h1>
      {/* 
      <h1
        className={`text-3xl my-5 text-center font-extrabold ${
          userActive ? "text-green-600" : "text-red-600"
        }`}
      >
        {userActive ? <p>user is online</p> : "user is offline"}
      </h1>

      <button
        onClick={handleClick}
        onMouseEnter={() => {
          setUserActive(!userActive);
        }}
        className="py-1 px-2 rounded bg-amber-700 text-white"
      >
        {userActive ? "Offline" : "Online"}
      </button>

      {userActive ? <h1>User is again online</h1> : ""}

      {userActive && <h1>This is again and again online</h1>} */}
    </div>
  );
}
