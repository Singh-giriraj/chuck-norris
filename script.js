const buttonGen = document.querySelector(".buttonGen");
const buttonReset = document.querySelector(".buttonReset");
const display = document.querySelector(".display");
const ul = document.createElement("ul");
ul.classList.add("list");
display.appendChild(ul);

buttonGen.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      let jock = data.value;
      let liItem = document.createTextNode(jock);
      let li = document.createElement("li");
      ul.appendChild(li);
      li.appendChild(liItem);
    })
    .catch();
});

buttonReset.addEventListener("click", () => {
  location.reload();
});
