/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function aleatorio(datos) {
    return datos[Math.floor(Math.random() * datos.length)];
  }

  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q"
  ];
  let card = document.querySelector(".card");
  let cardSuit1 = [aleatorio(suits)];
  console.log(cardSuit1);
  let result1 = document.querySelector("#top");
  result1.innerHTML = cardSuit1;

  let result2 = document.querySelector("#bottom");
  result2.innerHTML = cardSuit1;

  let numRandom = [aleatorio(numbers)];
  console.log(numRandom);
  let result3 = document.querySelector(".js-number");
  result3.innerHTML = numRandom;
  if (cardSuit1 == "♥" || cardSuit1 == "♦") {
    card.classList.add("red");
  } else {
    card.classList.add("black");
  }
};
