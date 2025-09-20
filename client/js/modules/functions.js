import { mobileHidde, lineOne, lineTwo, lineThree } from "./domSelectors.js";

const mobileMenu = document.querySelector(".mobileMenuDisplayedItems");
const menuLinks = document.querySelectorAll(".menu-link");

const displayMenu = () => {
  lineOne.classList.toggle("line-one");
  lineTwo.classList.toggle("line-two");
  lineThree.classList.toggle("line-three");
  mobileHidde.classList.toggle("displayMenu");
};

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("displayMenu");
  });
});

export { displayMenu };
