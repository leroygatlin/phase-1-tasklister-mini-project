document.addEventListener("DOMContentLoaded", () => {

document.getElementById("create-task-form").addEventListener("submit",(event) => {
event.preventDefault();

const newTask = document.getElementById("new-task-description").value 

const li = document.createElement("li")
li.textContent = newTask 

let x = document.createElement("button")
x.innerHTML = "x"

document.getElementById("tasks").append(li, x)
} )

});
