import "../sass/style.scss";

let form = document.getElementById("form");
let selected = document.getElementById("users");
let content = document.getElementById("content");
let completedTask = document.getElementById("checked");
let button = document.getElementById("submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: selected.value,
      completed: completedTask.checked,
      title: content.value,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => console.error("Error:", error));
});

const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        selected.appendChild(option);
      });
    })
    .catch((error) => console.error("Error:", error));
};
getUsers();
