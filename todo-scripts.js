const todos = [];

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let toDoContainer2 = document.getElementById("toDoContainer-2");
let reminder = document.getElementById("reminder");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");

  paragraph.classList.add("paragraph-styling");

  paragraph.innerText = inputField.value;

  toDoContainer.appendChild(paragraph);

  todos.push(inputField.value);

  inputField.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
});

reminder.addEventListener("click", function () {
  toDoContainer2.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Don't forget to: " + todos[i];
    paragraph.classList.add("paragraph-styling");
    toDoContainer2.appendChild(paragraph);
  }
});
