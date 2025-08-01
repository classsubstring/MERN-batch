export default function MyButton({
  hoverColor,
  backgroundColor,
  text,
  clickFun,
}) {
  function handleClick() {
    console.log("button clicked");
    clickFun();
  }

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 hover:cursor-pointer ${
        hoverColor ? hoverColor : "hover:bg-orange-500"
      }
        
      ${
        backgroundColor ? backgroundColor : "bg-orange-700"
      } text-white rounded-4xl`}
    >
      {text ? text : "Click me"}
    </button>
  );
}
