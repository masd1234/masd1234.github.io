import { containerProjects } from "./modules/projects.js";
import { appearsOnScroll } from "./modules/scroll.js";
import { displayMenu } from "./modules/functions.js";
import {
  parentContainerProjectsJs,
  parentContainerProjectsReact,
  mobileButtom,
} from "./modules/domSelectors.js";

// mobile navbar display and undisplay
mobileButtom.onclick = displayMenu;

containerProjects.forEach((item) => {
  let containerIdividual = `
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
  `;

  const lastContainer = document.createElement("div");
  lastContainer.className = "containerProjectShow fade-out";
  lastContainer.innerHTML = containerIdividual;

  if (item.language === "javascript") {
    parentContainerProjectsJs.appendChild(lastContainer);
  } else {
    parentContainerProjectsReact.appendChild(lastContainer);
  }
});

// scroll effect

const faders = document.querySelectorAll(".containerProjectShow");
const fadersLeft = document.querySelectorAll(".projectOverview");
const fadersUp = document.querySelectorAll(".flip-card");

faders.forEach((fader) => {
  appearsOnScroll.observe(fader);
});

fadersLeft.forEach((faderleft) => {
  appearsOnScroll.observe(faderleft);
});

fadersUp.forEach((faderUp) => {
  appearsOnScroll.observe(faderUp);
});
