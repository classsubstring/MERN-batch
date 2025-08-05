import { IoLogoAndroid } from "react-icons/io";
import { TfiLayoutWidthDefault } from "react-icons/tfi";
export function Card({
  icon = <TfiLayoutWidthDefault size={80} />,
  title = "Title",
  content = "This default content",
  buttonText = "Click Here",
}) {
  return (
    <div className=" w-[calc(33.333%-1.24rem)]   flex gap-3 p-10 flex-col justify-center items-center rounded bg-slate-200">
      {icon}

      <h1 className="text-2xl font-extrabold">{title}</h1>
      <p className="text-center">{content}</p>
      <button className="bg-slate-700 text-white rounded px-3 py-1">
        {buttonText}
      </button>
    </div>
  );
}
