console.log("I'm here");

const section = document.querySelector("section");
const playerLives = document.querySelector(".livesPlayer");

let countLives = 3;

playerLives.textContent = countLives;

const getCards = () => [
  {
    image: "images/panda1-01.png",
    back: "images/pandafront-invert.png",
    name: "panda1",
  },
  {
    image: "images/panda2-01.png",
    back: "images/pandafront-invert.png",
    name: "panda2",
  },
  {
    image: "images/panda3-01.png",
    back: "images/pandafront-invert.png",
    name: "panda3",
  },
  {
    image: "images/panda4-01.png",
    back: "images/pandafront-invert.png",
    name: "panda4",
  },
  {
    image: "images/panda5-01.png",
    back: "images/pandafront-invert.png",
    name: "panda5",
  },
  {
    image: "images/panda6-01.png",
    back: "images/pandafront-invert.png",
    name: "panda6",
  },
  {
    image: "images/panda1-01.png",
    back: "images/pandafront-invert.png",
    name: "panda1",
  },
  {
    image: "images/panda2-01.png",
    back: "images/pandafront-invert.png",
    name: "panda2",
  },
  {
    image: "images/panda3-01.png",
    back: "images/pandafront-invert.png",
    name: "panda3",
  },
  {
    image: "images/panda4-01.png",
    back: "images/pandafront-invert.png",
    name: "panda4",
  },
  {
    image: "images/panda5-01.png",
    back: "images/pandafront-invert.png",
    name: "panda5",
  },
  {
    image: "images/panda6-01.png",
    back: "images/pandafront-invert.png",
    name: "panda6",
  },
];

const randomizeCards = () => {
  const cardData = getCards();
  //how to randominize array in JS:
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const createCard = () => {
  const cardData = randomizeCards();

  cardData.forEach((e) => {
    //create the cards on the html page
    const card = document.createElement("div");
    const backCard = document.createElement("img");
    const frontCard = document.createElement("img");

    card.classList = "card";
    backCard.classList = "back";
    frontCard.classList = "front";

    frontCard.src = e.image;
    backCard.src = e.back;

    section.appendChild(card);
    card.appendChild(frontCard);
    card.appendChild(backCard);
  });
};

createCard();
