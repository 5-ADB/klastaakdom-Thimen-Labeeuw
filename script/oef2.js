const toestellen = [
  {
    id: 1,
    type: "huishoud",
    benaming: "wasmachine",
    type: "bosh",
    kleur: "rood",
    onderhoud: [
      {
        id: 1,
        datum: "29/06/2020",
        omschrijving: "draait niet meer",
        opgelost: true,
      },
      {
        id: 2,
        datum: "10/02/2022",
        omschrijving: "deur stuk",
        opgelost: true,
      },
    ],
  },
  {
    id: 2,
    type: "huidhoud",
    benaming: "droogkast",
    type: "bosh",
    kleur: "wit",
    onderhoud: [
      {
        id: 1,
        datum: "12/01/2023",
        omschrijving: "knoppen werken niet meer",
        opgelost: true,
      },
      {
        id: 2,
        datum: "12/08/2024",
        omschrijving: "filter stuk",
        opgelost: false,
      },
    ],
  },
];

//object toeveogen in html
function AddToDo(list) {
  list.forEach((toestel) => {
    toestel.onderhoud.forEach((probleem) => {
      const divToDo = document.createElement("div");
      divToDo.className = "ToDo";
      const ToDoText = document.createElement("p");
      ToDoText.className = "ToDoText";
      ToDoText.innerHTML = `id: ${probleem.id} - toestel: ${toestel.benaming}: ${probleem.omschrijving}`;
      const CheckBtn = document.createElement("input");
      CheckBtn.type = "checkbox";
      CheckBtn.className = "checkBtn";
      CheckBtn.innerHTML = "afwerken";
      CheckBtn.addEventListener("click", () => {
        if (CheckBtn.value == "on") {
          DeleteToDo(divToDo);
        }
      });
      divToDo.appendChild(ToDoText);
      divToDo.appendChild(CheckBtn);
      document.querySelector("#todoList").appendChild(divToDo);
    });
  });
}

console.log("hallo");

function DeleteToDo(ToDo) {
  document.querySelector("#afgehandeld").appendChild(ToDo);
}

function ToDoAdd(ToDo) {
  document.querySelector("#todoList").appendChild(ToDo);
}

AddToDo(toestellen);
