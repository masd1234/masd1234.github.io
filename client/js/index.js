/* mobile navbar display and undisplay */
const mobileButtom = document.querySelector(".mobileMenu");
const mobileHidde = document.querySelector(".mobileMenuDisplayedItems");
const buttomX = document.querySelector(".buttomUndisplay");
const lineOne = document.getElementById("one");
const lineTwo = document.getElementById("two");
const lineThree = document.getElementById("three");

const displayMenu = () => {
  lineOne.classList.toggle("line-one");
  lineTwo.classList.toggle("line-two");
  lineThree.classList.toggle("line-three");
  mobileHidde.classList.toggle("displayMenu");
};

mobileButtom.onclick = displayMenu;

// scroll effect
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
    titleProject: "Dog Finder",
    titleDescription:
      "Find your favorite dog using this app: HTML, CSS and JavaScript.",
    img: "../resources/dog.gif",
    showProject: "https://masd1234.github.io/dogFinder/",
    showSourceCode: "https://github.com/masd1234/dogFinder/settings",
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
      "If you want to keep track of your money use this app and will let you know how much you spent. built with: HTML, CSS and JavaScript.",
    img: "../resources/budget.gif",
    showProject: "https://masd1234.github.io/budget/",
    showSourceCode: "https://github.com/masd1234/budget",
  },

  {
    titleProject: "Vu",
    titleDescription:
      "A responsive website built with HTML, CSS and JavaScript.",
    img: "../resources/vu.gif",
    showProject: "https://masd1234.github.io/vu/",
    showSourceCode: "https://github.com/masd1234/vu",
  },
  {
    titleProject: "Weather App",
    titleDescription:
      "This app will help you to stay update with the current weather on your city.",
    img: "../resources/weather.gif",
    showProject: "https://masd1234.github.io/weather/",
    showSourceCode: "https://github.com/masd1234/weather",
  },
];

const arrayContainerReact = [
  {
    titleProject: "Mundostar",
    titleDescription: "A responsive website built with React.",
    img: "../resources/ms.gif",
    showProject: "https://masd1234.github.io/MundostarReact/#/",
    showSourceCode: "https://github.com/masd1234/MundostarReact",
  },
  {
    titleProject: "T+C",
    titleDescription: "A responsive website built with React.",
    img: "../resources/tmasc.gif",
    showProject: "https://masd1234.github.io/tmcreact",
    showSourceCode: "https://github.com/masd1234/tmcreact",
  },

  {
    titleProject: "Book List",
    titleDescription:
      "This app is to keep track the books that you have read, built with react.",
    img: "../resources/booklist.gif",
    showProject: "https://masd1234.github.io/booklist/",
    showSourceCode: "https://github.com/masd1234/booklist",
  },
  {
    titleProject: "React to do list",
    titleDescription:
      "This app is to keep track of your to do, built with react.",
    img: "../resources/reacttodo.gif",
    showProject: "https://masd1234.github.io/reacttodolist/",
    showSourceCode: "https://github.com/masd1234/reacttodolist",
  },
];

const containerReturnedJs = arrayContainerJs.map((item) => {
  let containerIdividual = `
  <div class="containerProjectShow fade-out">
  <div class="projectOverview fade-out-left">
  <h1 class="title-projectOverview">${item.titleProject}</h1>
  <h1 class="title-projectOverview-descripton">${item.titleDescription}</h1>
  </div>
  <div class="flip-card fade-out-up">
  <div class="conIndv flip-card-inner">
  <div class="flip-card-front">
  <h2>${item.titleProject}</h2>
  </div>
  <div class="flip-card-back">
  <img src=${item.img} class="video" autoplay ></img>
  <h2>${item.titleProject}</h2>
  <div class="containerButtom">
  <a class="show" href=${item.showProject} target="_blank">Live Project</a>
  <a class="show" href=${item.showSourceCode} target="_blank">Source Code</a>
  </div>
  </div>
  </div>
  </div>
  </div>`;
  return containerIdividual;
});

const containerReturnedReact = arrayContainerReact.map((item) => {
  let containerIdividualReact = `
  <div class="containerProjectShow fade-out">
  <div class="projectOverview fade-out-left">
  <h1 class="title-projectOverview">${item.titleProject}</h1>
  <h1 class="title-projectOverview-descripton">${item.titleDescription}</h1>
  </div>
  <div class="flip-card fade-out-up">
  <div class="conIndv flip-card-inner">
  <div class="flip-card-front">
  <h2>${item.titleProject}</h2>
  </div>
  <div class="flip-card-back">
  <img src=${item.img} class="video" autoplay ></img>
  <h2>${item.titleProject}</h2>
  <div class="containerButtom">
  <a class="show" href=${item.showProject} target="_blank">Live Project</a>
  <a class="show" href=${item.showSourceCode} target="_blank">Source Code</a>
  </div>
  </div>
  </div>
  </div>
  </div>`;

  return containerIdividualReact;
});

parentContainerProjectsJs.innerHTML = containerReturnedJs.join(" ");
parentContainerProjectsReact.innerHTML = containerReturnedReact.join(" ");

const faders = document.querySelectorAll(".containerProjectShow");
const fadersLeft = document.querySelectorAll(".projectOverview");
const fadersUp = document.querySelectorAll(".flip-card");

const apperarOptions = {
  threshold: 0,
  rootMargin: "0px 0px -190px 0px",
};
const appearsOnScroll = new IntersectionObserver(function (
  entries,
  appearsOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove("fade-out");
      entry.target.classList.add("fade-in-appear");
      appearsOnScroll.unobserve(entry.target);
    }
  });
},
apperarOptions);

const appearsOnScrollLeft = new IntersectionObserver(function (
  entries,
  appearsOnScrollLeft
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove("fade-out-left");
      entry.target.classList.add("fade-in-appear-left");
      appearsOnScrollLeft.unobserve(entry.target);
    }
  });
},
apperarOptions);

const appearsOnScrollUp = new IntersectionObserver(function (
  entries,
  appearsOnScrollUp
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target);
      entry.target.classList.remove("fade-out-up");
      entry.target.classList.add("fade-in-appear-up");
      appearsOnScrollUp.unobserve(entry.target);
    }
  });
},
apperarOptions);

faders.forEach((fader) => {
  appearsOnScroll.observe(fader);
});

fadersLeft.forEach((faderleft) => {
  appearsOnScrollLeft.observe(faderleft);
});

fadersUp.forEach((faderUp) => {
  appearsOnScrollUp.observe(faderUp);
});
