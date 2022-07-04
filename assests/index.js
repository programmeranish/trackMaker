let selectedId = 1;

let body = document.body;
let gridContainer = document.createElement("div");
gridContainer.height = "100vh";
gridContainer.width = "100vw";
body.appendChild(gridContainer);

//for selecting the list of items

let grass = document.createElement("img");
grass.style.height = "30px";
grass.style.width = "30px";
grass.src = "/assests/2.png";
grass.style.position = "absolute";
grass.style.bottom = "0px";
grass.style.left = "0px";

grass.addEventListener("click", () => {
  selectedId = 2;
});

gridContainer.appendChild(grass);

let track = document.createElement("img");
track.style.height = "30px";
track.style.width = "30px";
track.src = "/assests/1.png";
track.style.position = "absolute";
track.style.bottom = "0px";
track.style.left = "30px";

track.addEventListener("click", () => {
  selectedId = 1;
});

gridContainer.appendChild(track);

let wall = document.createElement("img");
wall.style.height = "30px";
wall.style.width = "30px";
wall.src = "/assests/9.png";
wall.style.position = "absolute";
wall.style.bottom = "0px";
wall.style.left = "120px";

wall.addEventListener("click", () => {
  selectedId = 9;
});

gridContainer.appendChild(wall);

let enemyBot = document.createElement("img");
enemyBot.style.height = "30px";
enemyBot.style.width = "30px";
enemyBot.src = "/assests/6.png";
enemyBot.style.position = "absolute";
enemyBot.style.bottom = "0px";
enemyBot.style.left = "180px";

enemyBot.addEventListener("click", () => {
  selectedId = 6;
});

gridContainer.appendChild(enemyBot);

let bridge = document.createElement("img");
bridge.style.height = "30px";
bridge.style.width = "30px";
bridge.src = "/assests/4.png";
bridge.style.position = "absolute";
bridge.style.bottom = "0px";
bridge.style.left = "240px";

bridge.addEventListener("click", () => {
  selectedId = 4;
});

gridContainer.appendChild(bridge);

let bridgeStart = document.createElement("img");
bridgeStart.style.height = "30px";
bridgeStart.style.width = "30px";
bridgeStart.src = "/assests/3.png";
bridgeStart.style.position = "absolute";
bridgeStart.style.bottom = "0px";
bridgeStart.style.left = "300px";

bridgeStart.addEventListener("click", () => {
  selectedId = 3;
});

gridContainer.appendChild(bridgeStart);

let bridgeEnd = document.createElement("img");
bridgeEnd.style.height = "30px";
bridgeEnd.style.width = "30px";
bridgeEnd.src = "/assests/5.png";
bridgeEnd.style.position = "absolute";
bridgeEnd.style.bottom = "0px";
bridgeEnd.style.left = "360px";

bridgeEnd.addEventListener("click", () => {
  selectedId = 5;
});

gridContainer.appendChild(bridgeEnd);

let array = [];

for (let y = 0; y < 5; y++) {
  let arr = [];
  array.push(arr);
  for (let x = 0; x < 5; x++) {
    let imageElement = document.createElement("img");
    imageElement.style.height = "30px";
    imageElement.style.width = "30px";
    imageElement.style.border = "2px solid black";
    imageElement.name = `{"y":${y},"x":${x}}`;
    imageElement.addEventListener("click", (event) => {
      event.target.src = `./assests/${selectedId}.png`;
      let { x, y } = JSON.parse(event.target.name);
      array[y][x] = selectedId;
      console.log(array);
    });
    gridContainer.appendChild(imageElement);
    arr.push(0);
  }
  gridContainer.appendChild(document.createElement("br"));
}
