let body = document.body;
let gridContainer = document.createElement("div");
gridContainer.height = "100vh";
gridContainer.width = "100vw";
body.appendChild(gridContainer);

let array = [];

for (let y = 0; y < 5; y++) {
  let arr = [];
  array.push(arr);
  for (let x = 0; x < 5; x++) {
    let imageElement = document.createElement("img");
    imageElement.style.height = "60px";
    imageElement.style.width = "60px";
    imageElement.style.border = "2px solid black";
    imageElement.name = `{"y":${y},"x":${x}}`;
    imageElement.addEventListener("click", () => {});
    gridContainer.appendChild(imageElement);
    arr.push(0);
  }
  gridContainer.appendChild(document.createElement("br"));
}
console.log(array);
