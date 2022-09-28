const todos = [];

function validateMyForm(event) {
  event.preventDefault();

  const todoValue = document.getElementById("todo-value").value;
  todos.push(todoValue);

  document.getElementById("todo-values").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const child = document.createElement("li");

    child.innerHTML = todos[i];

    document.getElementById("todo-values").appendChild(child);
  }
}