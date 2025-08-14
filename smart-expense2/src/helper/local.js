export function saveDataToLocalStorage(data) {
  //add save
  localStorage.setItem("expense", JSON.stringify(data));
  console.log("saved success..to localstorage");
}

export function getExpensesFromLocalStorage() {
  const data = localStorage.getItem("expense")
    ? localStorage.getItem("expense")
    : "[]";
  console.log(data);
  return JSON.parse(data);
}
