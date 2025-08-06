import { IoLogoAndroid } from "react-icons/io";
import { TfiLayoutWidthDefault } from "react-icons/tfi";
import { MdDelete } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
export function Card({
  id = -1,
  icon = <TfiLayoutWidthDefault size={80} />,
  title = "Title",
  content = "This default content",
  buttonText = "Click Here",
  deleteService,
}) {
  return (
    <div className="relative w-[calc(33.333%-1.24rem)]   flex gap-3 p-10 flex-col justify-center items-center rounded bg-slate-200">
      {icon}

      <h1 className="text-2xl font-extrabold">{title}</h1>
      <p className="text-center">{content}</p>
      <div className="flex gap-3">
        <button className="bg-slate-700 text-white rounded px-3 py-1">
          {buttonText}
        </button>
      </div>

      <button
        onClick={() => {
          console.log("delete on card");
          if (id > 0) {
            deleteService(id);
          }

          //delete product
        }}
        className="absolute hover:bg-gray-400 cursor-pointer top-4 right-4   bg-transparent  rounded-full px-3 py-1"
      >
        <RxCross1 size={20} />
      </button>
    </div>
  );
}
