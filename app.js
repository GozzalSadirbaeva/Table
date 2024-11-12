let datasForTable = [
  { id: 1, name: "Jhon", age: 25, action: "del edit" },
  { id: 2, name: "Jhon", age: 25, action: "del edit" },
  { id: 3, name: "Jhon", age: 25, action: "del edit" },
  { id: 4, name: "Jhon", age: 25, action: "del edit" },
  { id: 5, name: "Jhon", age: 25, action: "del edit" },
];
let head = document.querySelector(".head");
let table = document.querySelector("table");
Object.keys(datasForTable[0]).forEach((val) => {
  let th = document.createElement("th");
  th.textContent = val;
  head.append(th);
});
let counter = datasForTable.length;

function displayData() {
  datasForTable.forEach((val) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdAction = document.createElement("td");
    val.action.split(" ").forEach((action) => {
      let btn = document.createElement("button");
      //   btn.textContent = vals;
      btn.classList.add("btn", "btn-warning");

      if (action == "del") {
        btn.classList.add("fa-solid", "fa-trash");
        btn.style.backgroundColor = "red";
        btn.style.marginRight = "5px";
      } else {
        btn.classList.add("fa-solid", "fa-pencil");
      }

      tdAction.append(btn);
      if (action == "del") {
        btn.addEventListener("click", () => {
          tr.remove();
        });
      } else {
        btn.addEventListener("click", () => {
          tr.contentEditable = true;
        });
      }
    });
    tdId.textContent = val.id;
    tdName.textContent = val.name;
    tdAge.textContent = val.age;
    tr.append(tdId, tdName, tdAge, tdAction);
    table.append(tr);
  });
  datasForTable = [];
}
displayData();

let form = document.querySelector(".formTable");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let elem = e.target;
  let data = {
    id: counter + 1,
    name: elem[0].value,
    age: parseInt(elem[1].value),
    action: "del edit",
  };
  datasForTable.push(data);
  counter++;
  displayData();
  form.reset();
});
