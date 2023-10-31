/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suites = ["♦", "♥", "♠", "♣"];
let face = ["K", "J", "Q", 10, "9", "8", "7", "6", "5", "4", "3", "2", "A"];

window.onload = function() {
  let topSuitElement = document.querySelector(".topSuit");
  let faceElement = document.querySelector(".number");
  let bottomSuitElement = document.querySelector(".bottomSuit");

  const createRandomCard = () => {
    let randomFaceIndex = Math.floor(Math.random() * face.length);
    let randomSuitIndex = Math.floor(Math.random() * suites.length);

    topSuitElement.innerHTML = suites[randomSuitIndex];
    faceElement.innerHTML = face[randomFaceIndex];
    bottomSuitElement.innerHTML = topSuitElement.innerHTML;

    let randomSuit = suites[randomSuitIndex];
    if (randomSuit === "♦" || randomSuit === "♥") {
      document.querySelectorAll(".suitColor").forEach(suitElement => {
        suitElement.style.color = "red";
      });
    } else {
      document.querySelectorAll(".suitColor").forEach(suitElement => {
        suitElement.style.color = "black";
      });
    }
  };
  createRandomCard();
  document
    .getElementById("generateNewCardButton")
    .addEventListener("click", function() {
      createRandomCard();
    });
};
