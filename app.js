const section = document.querySelector("section");
const playerLives = document.querySelector(".livesPlayer");
const resetButton = document.querySelector(".reset");

let countLives = 5;
playerLives.textContent = countLives;

const getCards = () => [
  {
    image: "images/panda1-01.png",
    back: "images/pandafront-01.png",
    name: "panda1",
  },
  {
    image: "images/panda2-01.png",
    back: "images/pandafront-01.png",
    name: "panda2",
  },
  {
    image: "images/panda3-01.png",
    back: "images/pandafront-01.png",
    name: "panda3",
  },
  {
    image: "images/panda4-01.png",
    back: "images/pandafront-01.png",
    name: "panda4",
  },
  {
    image: "images/panda5-01.png",
    back: "images/pandafront-01.png",
    name: "panda5",
  },
  {
    image: "images/panda6-01.png",
    back: "images/pandafront-01.png",
    name: "panda6",
  },
  {
    image: "images/panda1-01.png",
    back: "images/pandafront-01.png",
    name: "panda1",
  },
  {
    image: "images/panda2-01.png",
    back: "images/pandafront-01.png",
    name: "panda2",
  },
  {
    image: "images/panda3-01.png",
    back: "images/pandafront-01.png",
    name: "panda3",
  },
  {
    image: "images/panda4-01.png",
    back: "images/pandafront-01.png",
    name: "panda4",
  },
  {
    image: "images/panda5-01.png",
    back: "images/pandafront-01.png",
    name: "panda5",
  },
  {
    image: "images/panda6-01.png",
    back: "images/pandafront-01.png",
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

    frontCard.src = e.back;
    backCard.src = e.image;
    card.setAttribute("name", e.name);

    section.appendChild(card);
    card.appendChild(frontCard);
    card.appendChild(backCard);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const selectToggle = document.querySelectorAll(".toggleCard");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      countLives--;
      playerLives.textContent = countLives;
      if (countLives === 0) {
        restartGame("😭 Oh no, you lost the game 🐼");
      }
    }
  }

  if (selectToggle.length === 12) {
    restartGame("🎉 Congratulations, you won 🎉🐼");
  }
};

const restartGame = (text) => {
  const cardData = randomizeCards();
  const faces = document.querySelectorAll(".back");
  const cards = document.querySelectorAll(".card");

  section.style.pointerEvents = "none";

  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");

    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.image;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });

  countLives = 5;
  playerLives.textContent = countLives;
  setTimeout(() => window.alert(text), 100);
};

createCard();

const buttonAgain = resetButton.addEventListener("click", () => {
  restartGame("Starting again! good luck!");
});
