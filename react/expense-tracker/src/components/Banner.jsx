import MyButton from "./MyButton";

export default function Banner() {
  return (
    <div className="h-[400px] flex flex-col items-center justify-center gap-3 bg-slate-900 text-white">
      <h1 className="text-3xl font-semibold">
        Collection all expenses together.
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        accusantium?
      </p>
      <MyButton
        backgroundColor={"bg-slate-700"}
        hoverColor={"hover:bg-slate-500 "}
        text={"Start Exploring"}
      />
    </div>
  );
}
