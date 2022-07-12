console.log("I'm here");

const section = document.querySelector("section");
const playerLives = document.querySelector(".livesPlayer");

let countLives = 3;

playerLives.textContent = countLives;

const getCards = () => [
  { image: "images/panda1-01.png", name: "panda1" },
  { image: "images/panda2-01.png", name: "panda2" },
  { image: "images/panda3-01.png", name: "panda3" },
  { image: "images/panda4-01.png", name: "panda4" },
  { image: "images/panda5-01.png", name: "panda5" },
  { image: "images/panda6-01.png", name: "panda6" },
  { image: "images/padafront-01.png", name: "pandaFront" },
  { image: "images/panda1-01.png", name: "panda1" },
  { image: "images/panda2-01.png", name: "panda2" },
  { image: "images/panda3-01.png", name: "panda3" },
  { image: "images/panda4-01.png", name: "panda4" },
  { image: "images/panda5-01.png", name: "panda5" },
  { image: "images/panda6-01.png", name: "panda6" },
];

const randomizeCards = () => {
  const cardData = getCards();
  //how to randominize array in JS:
  cardData.sort(() => Math.random() - 0.5);
  console.log(cardData);
};

const backCard = document.createElement("div");
const frontCard = document.createElement("div");

const displayCard = () => {
  randomizeCards().map((d) => backCard.getCards.image);
};

displayCard();
