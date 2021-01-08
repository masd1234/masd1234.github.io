const mobileButtom = document.querySelector(".mobileMenu");
const mobileHidde = document.querySelector(".mobileMenuDisplayedItems");
const buttomX = document.querySelector(".buttomUndisplay");

const displayMenu = () => {
  mobileHidde.style.display = "flex";
};

const undisplayMenu = () => {
  mobileHidde.style.display = "none";
};

document.querySelectorAll(".linkProjects").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//containers dynamically created for javascript projects
const parentContainerProjectsJs = document.querySelector(".js");
const parentContainerProjectsReact = document.querySelector(".react");
const arrayContainerJs = [
  {
    titleProject: "To-do List",
    titleDescription:
      "This project is a to-do list built using, you can keep track of your pending tasks: HTML, CSS and JavaScript.",
    img: "../resources/todo.gif",
    showProject: "https://masd1234.github.io/TodoList/",
    showSourceCode: "https://github.com/masd1234/TodoList",
  },

  {
    titleProject: "Number Guesser",
    titleDescription:
      "This project is a game created with HTML, CSS and JavaScript.",
    img: "../resources/number.gif",
    showProject: "https://masd1234.github.io/numberGuesser/",
    showSourceCode: "https://github.com/masd1234/numberGuesser",
  },

  {
    titleProject: "Budget App",
    titleDescription:
      "If you want to keep track of your money use this app and will let you know how much you spent. built with: Html,Css and Javascript",
    img: "../resources/budget.gif",
    showProject: "https://masd1234.github.io/budget/",
    showSourceCode: "https://github.com/masd1234/budget",
  },

  {
    titleProject: "Colomar",
    titleDescription: "A responsive website built with Html and Css.",
    img: "../resources/colmar.gif",
    showProject: "https://masd1234.github.io/colmar/",
    showSourceCode: "https://github.com/masd1234/colmar",
  },

  {
    titleProject: "Vu",
    titleDescription:
      "A responsive website built with Html, Css and Javascript.",
    img: "../resources/vu.gif",
    showProject: "https://masd1234.github.io/vu/",
    showSourceCode: "https://github.com/masd1234/vu",
  },

  {
    titleProject: "Mundostar",
    titleDescription:
      "A responsive website built with Html, Css and JavaScript.",
    img: "../resources/ms.gif",
    showProject: "https://masd1234.github.io/mundostar/",
    showSourceCode: "https://github.com/masd1234/mundostar",
  },

  {
    titleProject: "T+C",
    titleDescription:
      "A responsive website built with Html, Css and JavaScript.",
    img: "../resources/tmasc.gif",
    showProject: "https://masd1234.github.io/tmasc/",
    showSourceCode: "https://github.com/masd1234/tmasc",
  },
];

const arrayContainerReact = [
  {
    titleProject: "Casupo",
    titleDescription:
      "Built using React Router this website will blow your mind.",
    img: "../resources/casupo.gif",
    showProject: "https://masd1234.github.io/casupo/",
    showSourceCode: "https://github.com/masd1234/casupo",
  },

  {
    titleProject: "Book List",
    titleDescription:
      "This app is to keep track the books that you have read, built with react.",
    img: "../resources/booklist.gif",
    showProject: "https://masd1234.github.io/booklist/",
    showSourceCode: "https://github.com/masd1234/booklist",
  },
];

const containerReturnedJs = arrayContainerJs.map((item) => {
  console.log(item);
  let containerIdividual = `<div class="conIndv">
  <h2>${item.titleProject}</h2>
  <p>${item.titleDescription}</p>
  <img src=${item.img} class="video" autoplay ></img>
  <div class="containerButtom">
  <a class="show" href=${item.showProject} target="_blank">Live Project</a>
  <a class="show" href=${item.showSourceCode} target="_blank">Source Code</a>
  </div>
  </div>`;
  console.log(item);

  return containerIdividual;
});

const containerReturnedReact = arrayContainerReact.map((item) => {
  let containerIdividualReact = `<div class="conIndv">
  <h2>${item.titleProject}</h2>
  <p>${item.titleDescription}</p>
  <img src=${item.img} class="video" autoplay ></img>
  <div class="containerButtom">
  <a class="show" href=${item.showProject} target="_blank">Live Project</a>
  <a class="show" href=${item.showSourceCode} target="_blank">Source Code</a>
  </div>
  </div>`;

  return containerIdividualReact;
});

parentContainerProjectsJs.innerHTML = containerReturnedJs.join(" ");
parentContainerProjectsReact.innerHTML = containerReturnedReact.join(" ");
