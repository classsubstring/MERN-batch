import MyButton from "./MyButton";

export default function Header() {
  return (
    <nav className=" text-white bg-gradient-to-r from-gray-700 to-gray-950 flex justify-between px-32 h-18 items-center ">
      <div className="brand_logo">
        <span className="text-3xl font-semibold">Smart Tracker</span>
      </div>
      <div className="flex gap-5  items-center">
        <ul className="flex gap-5 hover:cursor-pointer">
          <li className="hover:text-blue-400">Add Expense</li>
          <li className="hover:text-blue-400">View Expense</li>
        </ul>
        <MyButton
          hoverColor={"hover:bg-blue-500"}
          backgroundColor={"bg-blue-900"}
          text={"Login"}
          clickFun={() => {
            console.log("Login button clicked");
          }}
        />
        <MyButton
          clickFun={() => {
            console.log("register fun");
          }}
          text={"Register"}
        />
      </div>
    </nav>
  );
}
