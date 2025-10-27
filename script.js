import { loadModule1 } from "./modules/module1.js";

const startButton = document.getElementById("startButton");
const content = document.getElementById("content");

startButton.addEventListener("click", () => {
  loadModule1(content);
});
